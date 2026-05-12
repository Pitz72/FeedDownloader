# Bienvenido a Runtime FeedDownloader Pro
**La forma más potente y resistente de archivar tus podcasts.**

## ¿Qué es?
Runtime FeedDownloader Pro es la herramienta profesional del **Ecosystem Runtime | Digital Core** diseñada para archivistas, editores y entusiastas que necesitan descargar catálogos completos de podcasts para su conservación fuera de línea.

A diferencia de los reproductores comunes, este software está optimizado para la **descarga masiva (Batch)**, la resistencia de la red y la organización estructurada de archivos en el disco.

---

## La Filosofía: "Database-First"
El corazón de FeedDownloader Pro es su motor basado en **SQLite**. A diferencia de otros programas que dependen exclusivamente de la presencia de archivos en el disco, nuestro sistema:
1.  **Recuerda cada descarga:** Incluso si mueves el archivo a un NAS o a un disco externo, la base de datos mantiene el estado de tu colección.
2.  **Evita duplicados:** Se acabó la confusión entre archivos `.mp3`, `.m4a` o episodios descargados varias veces.
3.  **Integridad documentada:** Cada archivo descargado se verifica mediante un hash SHA-256 y los metadatos (bitrate, frecuencia de muestreo) se extraen automáticamente.

## Características Únicas

### 1. Resistencia Extrema de la Red
Descargar cientos de archivos de audio requiere una gestión de errores impecable. FeedDownloader Pro implementa:
- **Reintentos Automáticos:** Con retroceso exponencial para no sobrecargar los servidores.
- **Detección de Bloqueo (Stall):** Si el servidor deja de enviar datos durante 60 segundos, la descarga se reinicia automáticamente.
- **Archivos .part Anti-Corrupción:** Los archivos se renombran con la extensión final solo cuando la descarga se completa totalmente.

### 2. Seguridad y Validación (SSRF)
La aplicación implementa una validación anti-SSRF de 5 niveles en cada URL introducida. Bloqueamos protocolos peligrosos y direcciones IP privadas, garantizando tu seguridad incluso con feeds RSS de fuentes desconocidas.

### 3. Soporte Profesional NAS/SMB
Diseñado para archivistas, el software valida las rutas de red con un tiempo de espera de 8 segundos, evitando los bloqueos de la interfaz comunes al trabajar con unidades de red o NAS que no están listos.

### 4. Biblioteca de Feeds Permanente y Vista de Archivo
La barra lateral redimensionable conserva todos los feeds añadidos entre las sesiones, con un distintivo numérico que señala los nuevos episodios publicados desde la última descarga. La pestaña Archivo ofrece una tabla única con todos los episodios descargados, con búsqueda, filtro por podcast y estadísticas agregadas.

### 5. Panel de Descarga y Paleta de Comandos
El Panel de Descarga lateral muestra la cola en tiempo real con velocidad, tiempo estimado y registro de errores para cada batch. Se abre automáticamente al iniciar las descargas y permanece accesible mediante un botón flotante. La Paleta de Comandos (Ctrl+K) permite invocar cualquier acción o feed desde el teclado, sin usar el ratón.

### 6. Actualización Automática de los Feeds
Un temporizador en segundo plano (6/12/24 horas) sincroniza todos los feeds sin intervención manual y envía una notificación del sistema operativo cuando se encuentran nuevos episodios, sin iniciar automáticamente las descargas.

---

## Requisitos del Sistema
- **Windows**: 10/11 (64 bits)
- **macOS**: 11.0 (Big Sur) o superior
- **Linux**: Distribuciones modernas (Ubuntu, Debian, Fedora)
- Conexión a Internet activa para el análisis de feeds.

---
*Parte del Ecosystem Runtime | Digital Core — Herramientas construidas para durar.*
