# ⚡ Runtime FeedDownloader Pro: Guía de Inicio Rápido

Bienvenido a **Runtime FeedDownloader Pro**. Esta guía te llevará desde el primer inicio hasta tu primer archivo de podcast completo en menos de 3 minutos.

---

## 1. Análisis del Feed

Primero, indica al software qué podcast quieres archivar:

1. Copia la **URL RSS** del podcast que deseas descargar (normalmente se encuentra en el sitio web del podcast con etiquetas como "RSS", "Feed" o "Subscribe").
2. Pégala en la **barra de búsqueda principal** en la parte superior de la interfaz.
3. Haz clic en el botón **"Analizar"** (o pulsa `Intro`).
4. El software consultará el feed y mostrará la lista completa de episodios disponibles, con título, duración y fecha de publicación.

> **Consejo:** Puedes arrastrar y soltar la URL directamente sobre la ventana de la aplicación (Drag & Drop) sin usar la barra de búsqueda.

---

## 2. Elección del Destino

Antes de iniciar la descarga, elige dónde guardar tus archivos:

1. Haz clic en el icono de **carpeta** junto al campo de ruta de destino.
2. Selecciona (o crea) la carpeta donde quieres que se organice el archivo.
3. Si usas un **NAS o unidad de red (SMB)**, introduce la ruta de red (ej. `\\NAS\Podcasts\`). El software verificará automáticamente el acceso de escritura en 8 segundos, sin bloquear la interfaz.

> **Consejo:** Crea una carpeta dedicada para cada podcast (ej. `D:\Archivo\NombrePodcast\`). FeedDownloader Pro guardará los archivos de forma organizada y recordará la ubicación en su base de datos.

---

## 3. Inicio de la Descarga

Tienes el feed analizado y la carpeta lista. Ahora puedes descargar:

**Opción A — Descargar el catálogo completo:**
1. Haz clic en el botón principal **"Descargar Todo"**.
2. La lista completa de episodios se añadirá a la cola de descarga.
3. El software comenzará a descargar archivos en paralelo (el número de hilos es configurable en Ajustes).

**Opción B — Descarga selectiva:**
1. En la lista de episodios, localiza el que te interesa.
2. Haz clic en el icono de **descarga** (flecha hacia abajo) junto al episodio.
3. Puedes seleccionar varios episodios manteniendo pulsado `Ctrl` y luego iniciarlos juntos.

> **Consejo:** El sistema **Stall Detection** monitoriza cada descarga: si un servidor deja de responder durante 60 segundos, la descarga se reinicia automáticamente. No necesitarás revisar la cola manualmente.

---

## 4. Gestión de la Cola

Mientras FeedDownloader Pro trabaja, tienes el control total:

- **Barra de Progreso Global:** Visible en la parte inferior de la interfaz, muestra el avance de todo el lote (archivos completados / totales, velocidad media).
- **Pausar / Reanudar:** Haz clic en **Pausar** para suspender todas las descargas. Cuando estés listo, haz clic en **Reanudar**.
- **Detener:** Detiene el lote. Los archivos ya completados se mantienen en la base de datos. En el próximo inicio, FeedDownloader Pro reconocerá los archivos ya descargados y evitará duplicados.
- **Icono de Bandeja (Área de Notificación):** Puedes cerrar la ventana principal: el software continuará trabajando en segundo plano. El icono en el área de notificación (bandeja del sistema) te permite reabrir la app o detener las descargas en cualquier momento.

---

## 5. Exportación y Estadísticas

Una vez completada la descarga, accede a **Ajustes** (icono de engranaje ⚙️) para las funciones avanzadas:

- **Exportar CSV:** Genera un archivo de hoja de cálculo con la lista completa de episodios descargados (título, URL, ruta de archivo, hash SHA-256, tamaño, bitrate).
- **Importar/Exportar OPML:** Comparte tu lista de feeds con otras aplicaciones u otros usuarios del software.
- **Estadísticas del Archivo:** Visualiza el espacio en disco ocupado, el número total de episodios y el resumen de integridad (archivos verificados via SHA-256).
- **Plantilla de Renombrado:** Personaliza el formato del nombre de archivo usando tokens como `{{title}}`, `{{date}}`, `{{podcast}}` para un archivo perfectamente organizado.

---

## Consejos Útiles & Solución de Problemas

**El feed no se reconoce:**
Verifica que la URL sea directamente la dirección del archivo RSS (normalmente termina en `.xml` o `.rss`). Algunos sitios muestran una página HTML con un enlace al feed real: usa ese enlace.

**Algunos episodios no se descargan (error 404):**
El episodio ha sido eliminado del servidor del podcast. FeedDownloader Pro registrará el error en la base de datos sin bloquear otras descargas. Esta es una de las razones por las que el archivado oportuno es fundamental.

**Ruta NAS no accesible:**
Verifica que el NAS esté encendido y sea accesible en la red local antes de iniciar la descarga. Si usas credenciales SMB, asegúrate de que el recurso compartido esté montado (o que las credenciales estén configuradas en Windows).

**El software detuvo la descarga por "espacio en disco insuficiente":**
Libera espacio en el destino y reinicia el lote. Los archivos ya descargados no se volverán a descargar gracias a la base de datos.

---

*Seguridad Garantizada: Cada URL es filtrada por el sistema anti-SSRF de 5 niveles antes de ser procesada.*

*Parte del Ecosystem Runtime | Digital Core — Herramientas construidas para durar.*
