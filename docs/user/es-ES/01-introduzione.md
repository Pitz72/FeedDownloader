# Capítulo 1: Introducción y Filosofía

## 1.1 ¿Qué es Runtime FeedDownloader Pro?

Para describir el software, es útil partir del problema que resuelve.

Cada día se publican, distribuyen y escuchan miles de episodios de podcast. Con el tiempo, sin embargo, una parte considerable de estos contenidos desaparece: el presentador deja de pagar el servicio de alojamiento, la plataforma de distribución cesa su actividad, la CDN que alojaba los archivos de audio es desmantelada. Un episodio escuchado hace tres años podría ser hoy inaccesible de forma definitiva, no porque haya sido eliminado intencionalmente, sino porque nadie conservó una copia.

**Runtime FeedDownloader Pro** nace para responder a este problema. No es una simple herramienta de descarga de podcasts: es una aplicación profesional para la **conservación y el archivado sistemático** de contenidos de audio procedentes de feeds RSS. Está diseñada para archivistas, editores, emisoras de radio, productores de contenidos y aficionados para quienes la documentación sonora requiere el mismo rigor conservativo que se aplica a otros tipos de documentos.

---

## 1.2 A Quién Va Dirigido

FeedDownloader Pro responde a necesidades diversas:

*   **El Archivista:** Quiere descargar el catálogo completo de un podcast histórico antes de que sea eliminado. Necesita un sistema que recuerde los episodios ya descargados, evite los duplicados y verifique la integridad de cada archivo.

*   **El Productor Radiofónico:** Gestiona una biblioteca de contenidos en un NAS compartido. Necesita una herramienta que opere sobre rutas de red sin bloquearse, organice los archivos de forma predecible y produzca informes en formato CSV para su equipo.

*   **El Editor:** Quiere mantener una copia local de todos los podcasts de su red, exportar metadatos para los sistemas de gestión de contenidos y supervisar el estado del archivo a lo largo del tiempo.

*   **El Aficionado:** Quiere conservar sus podcasts favoritos en su disco duro, organizados de forma ordenada, sin depender de la disponibilidad de la conexión a internet ni arriesgarse a recibir archivos dañados.

---

## 1.3 La Filosofía "Database-First"

La diferencia fundamental entre FeedDownloader Pro y una herramienta de descarga genérica es el enfoque en la gestión del dato.

La mayoría de las herramientas de descarga funcionan de la siguiente manera: analiza los archivos presentes en el disco, los compara con el feed RSS y descarga lo que falta. Este enfoque tiene una limitación crítica: **el disco no es una fuente de verdad fiable**. Los archivos pueden ser movidos, renombrados, dañados o eliminados accidentalmente. Si se mueve la carpeta de podcasts de `C:\Podcast` a `D:\Archivo`, la herramienta pierde la referencia a los episodios ya descargados y comienza a descargar de nuevo el catálogo completo.

FeedDownloader Pro adopta un enfoque diferente. En el centro de cada operación se encuentra una **base de datos SQLite** que registra cada episodio analizado o descargado: la URL original, la ruta del archivo en el disco, la fecha de descarga, el hash SHA-256 del contenido y los metadatos de audio. La base de datos es la memoria persistente del software. Independientemente de la ubicación física de los archivos, la base de datos conserva el estado completo del archivo.

Esta arquitectura tiene consecuencias prácticas directas:

1.  **Sin duplicados.** Aunque se analice el mismo feed varias veces, el sistema reconoce los episodios ya presentes en la base de datos y no los vuelve a añadir a la cola.
2.  **Resistencia a los traslados.** Es posible mover el archivo a un nuevo disco o a un NAS: el historial permanece intacto en la base de datos.
3.  **Estado persistente entre sesiones.** Si el programa se cierra durante una descarga batch de 300 episodios, al reabrirlo la cola está disponible en el mismo estado en que se dejó.
4.  **Registro de operaciones.** Cada archivo descargado está documentado: fecha de descarga, URL de origen y estado de la verificación de integridad.

---

## 1.4 Los Tres Pilares del Software

Además del enfoque Database-First, FeedDownloader Pro se construye sobre tres principios técnicos con impacto directo en las funcionalidades.

### Resiliencia de Red

Descargar cientos de archivos de audio en secuencia desde Internet no es una operación exenta de complejidad. Los servidores pueden estar sobrecargados, las conexiones pueden interrumpirse, las transferencias pueden dañar el archivo. FeedDownloader Pro gestiona estos escenarios con tres mecanismos:

*   **Reintentos con backoff exponencial:** Cuando una descarga falla, el software no repite el intento de inmediato. En su lugar, espera un intervalo creciente: 2 segundos, luego 4, luego 8, hasta el límite máximo configurado. Este enfoque, estándar en los sistemas distribuidos, aumenta las probabilidades de éxito sin agravar la carga sobre el servidor origen.
*   **Detección de bloqueo (stall detection):** Una descarga bloqueada es más problemática que una descarga fallida. Si un servidor comienza a enviar datos y luego se interrumpe sin cerrar la conexión, un software sin este control quedaría en espera indefinida. FeedDownloader Pro monitoriza el flujo de datos en tiempo real: si no llegan nuevos bytes durante 60 segundos consecutivos, la descarga se interrumpe y se vuelve a insertar en la cola automáticamente.
*   **Archivos `.part` anti-corrupción:** Cada archivo se descarga con la extensión temporal `.part`. Solo al completarse totalmente y verificarse la transferencia, el archivo se renombra con la extensión definitiva (`.mp3`, `.m4a`, etc.). En caso de interrupción repentina, en la carpeta de destino no habrá archivos de audio parciales o dañados: solo archivos `.part` residuales, que el software eliminará y volverá a descargar en la siguiente sesión.

### Seguridad Integrada

FeedDownloader Pro procesa URLs procedentes de fuentes externas (los feeds RSS). Una URL construida de forma maliciosa, que apunte a recursos internos de la red (un router, un NAS, un servidor local), podría usarse para acceder a información confidencial — un ataque conocido como **SSRF (Server-Side Request Forgery)**.

Para prevenir este riesgo, cada URL se somete a una validación de **5 niveles** antes del procesamiento: verificación del protocolo, resolución DNS con inspección de la dirección IP resultante, bloqueo de los rangos de direcciones privadas (RFC 1918), bloqueo de protocolos distintos de HTTP/HTTPS y normalización de la ruta. Este procedimiento es completamente automático y transparente para el usuario.

### Soporte NAS y Rutas de Red

FeedDownloader Pro está diseñado para operar con archivos en discos de red. La gestión de rutas SMB — el protocolo utilizado por NAS, servidores Windows y recursos compartidos de red — es una fuente frecuente de problemas en las aplicaciones de escritorio: un disco de red inaccesible puede bloquear el hilo principal de la aplicación durante un tiempo considerable. FeedDownloader Pro resuelve este problema ejecutando la validación de la ruta de red en un hilo separado, con un timeout de 8 segundos. La interfaz permanece siempre reactiva, independientemente del estado de la ruta de red.

---

## 1.5 Contenido del Manual

Este manual cubre el uso completo de FeedDownloader Pro, desde la instalación hasta las funcionalidades más avanzadas. No es necesario leerlo en secuencia: cada capítulo es autónomo y puede consultarse de forma independiente.

Para un primer acercamiento al software, se recomienda seguir el **Capítulo 4 (El Primer Archivo)**, que ilustra un workflow completo desde el análisis del feed hasta la descarga. Quienes ya conozcan el software pueden acceder directamente al capítulo de su interés a través del índice general.

---

*Ecosystem Runtime | Digital Core — Herramientas construidas para durar.*
