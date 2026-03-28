# Capítulo 6: El Motor de Descarga

## 6.1 Arquitectura del Motor

El motor de descarga de FeedDownloader Pro es un sistema asíncrono con múltiples threads. A diferencia de un descargador secuencial, el software gestiona varias descargas simultáneamente mediante un sistema de cola central.

**Componentes principales:**

*   **La cola:** Una lista ordenada de todas las descargas en espera. Cada episodio añadido al batch entra en esta cola y espera a ser asignado a un thread disponible.
*   **Los worker threads:** Los procesos que ejecutan físicamente las descargas. El número de threads activos es configurable. Cada thread gestiona una descarga a la vez, de forma independiente de los demás.
*   **El gestor de base de datos:** El componente que actualiza en tiempo real la base de datos SQLite con el estado de cada descarga (iniciada, completada, fallida, porcentaje de avance).
*   **El monitor de integridad:** El proceso que, al completarse cada descarga, calcula y registra el hash SHA-256 del archivo descargado.

---

## 6.2 Descargas Paralelas: Configuración

El número de descargas simultáneas es uno de los parámetros más relevantes a configurar. Un valor insuficiente ralentiza el proceso; un valor excesivo puede saturar la conexión, sobrecargar el servidor de origen o generar errores de red.

**El valor predeterminado es 3 threads.** Para la mayoría de los usuarios con conexión doméstica, este valor ofrece un buen equilibrio entre velocidad y estabilidad.

**Directrices para la configuración:**

| Escenario | Threads recomendados |
|-----------|----------------------|
| Conexión lenta o servidor con throttling | 1 |
| Conexión doméstica estándar | 3 (predeterminado) |
| Conexión de fibra rápida | 5 |
| NAS con conexión de red lenta | 1 |

**Cómo modificar el número de threads:**
Ir a **Configuración → Descarga → Descargas paralelas** y seleccionar uno de los tres ajustes predefinidos: **1**, **3** o **5**. El cambio se aplica de inmediato a la cola en curso.

*Nota sobre servidores con límites de conexión:* Algunos servidores de hosting de podcast aplican limitaciones al número de conexiones simultáneas por dirección IP. En presencia de errores frecuentes `429 Too Many Requests` o `503 Service Unavailable`, reducir el número de threads a 1 o 2. El mecanismo de reintento gestiona automáticamente los fallos, pero reducir la carga previene el problema de raíz.

---

## 6.3 Gestión de Errores y Sistema de Reintento

En una descarga batch de cientos de archivos, los errores de red son previsibles. FeedDownloader Pro utiliza una estrategia de **reintento con backoff exponencial**: cuando una descarga falla, el sistema espera un intervalo creciente antes de volver a intentarlo, en lugar de volver a poner el episodio en cola de inmediato.

**Ciclo de reintento:**

| Intento | Espera antes del reintento |
|---------|---------------------------|
| 1.º fallo | 2 segundos |
| 2.º fallo | 4 segundos |
| 3.º fallo | 8 segundos |
| 4.º fallo | 16 segundos |
| 5.º fallo (último) | El episodio se marca como **"Error"** definitivo |

Si un servidor está temporalmente sobrecargado, el sistema le da tiempo para recuperarse antes de volver a intentarlo. La mayoría de los errores transitorios se resuelven en el segundo o tercer intento.

**Errores definitivos (no sujetos a reintento):**
*   `404 Not Found`: El archivo no existe en el servidor. Los nuevos intentos no son útiles.
*   `403 Forbidden`: El servidor rechazó la solicitud por falta de autorización.
*   Errores de validación SSRF: La URL no superó los controles de seguridad internos.

---

## 6.4 Detección de Estancamiento (Stall Detection)

Una descarga bloqueada es un escenario en el que la conexión TCP está técnicamente activa y los paquetes siguen llegando, pero el flujo de datos se ha detenido. El sistema operativo no notifica errores porque la conexión sigue abierta; el archivo continúa apareciendo como «en descarga» sin progresar.

Esta condición se produce frecuentemente con:
*   Servidores bajo carga que aplican throttling después de haber enviado los primeros bytes.
*   Problemas de enrutamiento de red intermedios.
*   Archivos de audio de gran tamaño servidos desde CDN con limitaciones de ancho de banda.

**Detección:**
Cada descarga activa es monitorizada por un proceso watchdog que registra los bytes recibidos cada 10 segundos. Si durante **60 segundos consecutivos** no llegan nuevos bytes (o llegan menos de 1 KB, umbral que excluye los keep-alive TCP), la descarga se considera bloqueada y:
1.  La conexión se interrumpe.
2.  El archivo `.part` parcial se elimina.
3.  El episodio vuelve a la cola con el ciclo de reintento normal.

El proceso es transparente para el usuario: en la barra de avance individual se aprecia un breve reinicio del porcentaje, seguido de la reanudación de la descarga. Si el bloqueo era causado por una condición transitoria, la nueva descarga comienza normalmente. Si el problema persiste más allá del número máximo de intentos, el episodio se marca como **"Error"**.

---

## 6.5 Archivos `.part`: El Sistema Anti-Corrupción

Cada archivo de audio se descarga con la extensión temporal `.part` durante la transferencia. El archivo se renombra con la extensión definitiva (`.mp3`, `.m4a`, `.ogg`, etc.) **solo** después de que:

1.  La transferencia se haya completado al 100 %.
2.  El tamaño del archivo coincida con el declarado en la cabecera HTTP (`Content-Length`), si está disponible.
3.  El hash SHA-256 haya sido calculado y registrado en la base de datos.

Este mecanismo garantiza que en la carpeta de destino nunca haya archivos de audio parciales o dañados con extensión definitiva. En caso de interrupción repentina del programa o apagado del equipo, en la carpeta quedarán archivos `.part` residuales: el software los eliminará y los volverá a descargar en la siguiente sesión.

*Ubicación de los archivos `.part`:* En la misma carpeta de destino de los archivos completados. Estos archivos no deben abrirse con un reproductor de audio: al ser parciales, causarían errores de lectura.

---

## 6.6 Interrupción y Reanudación de Sesiones

**Detener el Batch:**
El botón **"Detener"** (en la barra de avance global) interrumpe todos los threads activos de forma ordenada, vacía la cola y elimina los archivos `.part` parciales. Los archivos ya completados permanecen en la base de datos. En el próximo análisis del mismo feed, los episodios interrumpidos aparecerán como **"Por descargar"**.

**Cierre del programa durante una descarga:**
Si se cierra la ventana principal (el programa continúa en el system tray) o se usa **"Salir"** desde el menú del tray durante una descarga activa, el software muestra un aviso con el número de descargas en curso y solicita confirmación. Al elegir salir, las descargas activas se interrumpen de forma controlada y los archivos `.part` se conservan.

**Reanudar una sesión interrumpida:**
Al iniciarse, si FeedDownloader Pro detecta en la base de datos episodios en estado **"En cola"** o **"En progreso"** de la sesión anterior, muestra una notificación: *«Se encontraron X descargas pendientes de la sesión anterior. ¿Desea reanudarlas?»*. Al confirmar, el batch se reanuda de inmediato.

---

## 6.7 Velocidad de Descarga

La velocidad mostrada en la barra inferior es la **suma agregada** de todos los threads activos. Con 3 threads activos descargando cada uno a 2 MB/s, la velocidad total mostrada es de aproximadamente 6 MB/s.

**Factores que influyen en la velocidad:**
*   **Ancho de banda de la conexión:** El límite máximo disponible.
*   **Velocidad del servidor de origen:** Muchos servidores de hosting de podcast aplican limitaciones de ancho de banda para contener costes. La velocidad de un único thread raramente supera los 2–5 MB/s en estos servidores.
*   **Número de threads:** Un mayor número de threads compensa la lentitud de los servidores individuales descargando desde varias conexiones simultáneas.
*   **Tamaño de los archivos:** Los archivos de tamaño medio (20–80 MB, correspondientes a episodios de 30–60 minutos) ofrecen la eficiencia óptima, con una sobrecarga relativa de conexión reducida.

---

*Véase el Capítulo 7 para la configuración de rutas NAS y de red.*
