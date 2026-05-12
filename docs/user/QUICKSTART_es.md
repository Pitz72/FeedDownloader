# ⚡ Runtime FeedDownloader Pro: Guía de Inicio Rápido

Bienvenido a **Runtime FeedDownloader Pro**. Esta guía te llevará desde el primer inicio hasta tu primer archivo de podcast completo en menos de 3 minutos.

---

## 1. Análisis del Feed

Primero, indica al software qué podcast quieres archivar:

1. Copia la **URL RSS** del podcast que deseas descargar (normalmente se encuentra en el sitio web del podcast con etiquetas como "RSS", "Feed" o "Subscribe").
2. Pégala en la **barra de búsqueda principal** en la parte superior de la interfaz.
3. Haz clic en el botón **"Analizar"** (o pulsa `Intro`).
4. El software consultará el feed y mostrará la lista completa de episodios disponibles, con título, duración y fecha de publicación. El feed se añade automáticamente a la barra lateral izquierda para accesos futuros.

> **Consejo:** Puedes arrastrar y soltar la URL directamente sobre la ventana de la aplicación (Drag & Drop) sin usar la barra de búsqueda.

---

## 2. Elección del Destino

Antes de iniciar la descarga, elige dónde guardar tus archivos:

1. Ve a **Ajustes → Archivo** y haz clic en el icono de **carpeta** junto al campo de ruta de destino.
2. Selecciona (o crea) la carpeta donde quieres que se organice el archivo.
3. La ruta configurada siempre es visible en el pie de la barra lateral izquierda: haz clic en ella para abrir la carpeta directamente en el explorador de archivos.
4. Si usas un **NAS o unidad de red (SMB)**, introduce la ruta de red (ej. `\\NAS\Podcasts\`). El software verificará automáticamente el acceso de escritura en 8 segundos, sin bloquear la interfaz.

> **Consejo:** Crea una carpeta dedicada para cada podcast (ej. `D:\Archivo\NombrePodcast\`). FeedDownloader Pro guardará los archivos de forma organizada y recordará la ubicación en su base de datos.

---

## 3. Inicio de la Descarga

Tienes el feed analizado y la carpeta lista. Ahora puedes descargar:

**Opción A — Descargar el catálogo completo:**

1. Haz clic en el botón principal **"Descargar Todo"** en el encabezado de la lista de episodios.
2. La lista completa de episodios se añadirá a la cola de descarga.
3. El software comenzará a descargar archivos en paralelo (el número de hilos es configurable en Ajustes).

**Opción B — Descarga selectiva:**

1. En la lista de episodios, localiza los que te interesan.
2. Haz clic en el icono de **descarga** (flecha hacia abajo) que aparece al pasar el ratón junto al episodio.
3. Para seleccionar varios episodios, mantén pulsado `Ctrl` y haz clic en cada uno (o usa `Mayús`+clic para seleccionar un rango), luego haz clic en **"Descargar seleccionados (N)"**.

> **Consejo:** El sistema **Stall Detection** monitoriza cada descarga: si un servidor deja de responder durante 60 segundos, la descarga se reinicia automáticamente.

---

## 4. Seguimiento de la Descarga

Cuando inicias un lote, el **Panel de Descarga** se abre automáticamente en el lado derecho de la ventana.

* **Qué muestra:** cada episodio en la cola con el porcentaje de progreso, la velocidad actual (KB/s o MB/s) y el tiempo estimado hasta la finalización.
* **Cancelar una descarga individual:** pasa el ratón sobre el episodio en el panel y haz clic en el botón **×** que aparece.
* **Detener todo:** haz clic en el botón **Detener** en el encabezado del panel.
* **Cerrar el panel sin detener las descargas:** haz clic en la **×** en la parte superior derecha del panel. Un **botón flotante** permanece visible en la parte inferior derecha: hacer clic en él reabre el panel en cualquier momento.
* **Registro de errores:** al final del lote, si algunos episodios fallaron, el panel muestra un resumen expandible con títulos y códigos de error.
* **Ejecución en segundo plano:** puedes cerrar la ventana principal haciendo clic en la X: el software continúa trabajando en el área de notificación (bandeja del sistema) y las descargas continúan sin interrupciones.

> **Consejo:** Pulsa **Ctrl+K** en cualquier momento para abrir la Paleta de Comandos: desde allí puedes iniciar "Sincronizar todos los feeds", abrir Ajustes o cambiar a otro podcast sin usar el ratón.

---

## 5. Exportación y Estadísticas

Una vez completada la descarga, accede a **Ajustes** (icono de engranaje ⚙️) para las funciones avanzadas:

* **Exportar CSV:** Genera un archivo de hoja de cálculo con la lista completa de episodios descargados (título, URL, ruta de archivo, hash SHA-256, tamaño, bitrate).
* **Importar/Exportar OPML:** Comparte tu lista de feeds con otras aplicaciones u otra instalación del software.
* **Estadísticas del Archivo:** Visualiza el espacio en disco ocupado, el número total de episodios y los podcasts distintos en el archivo.
* **Plantilla de Renombrado:** Personaliza el formato del nombre de archivo usando tokens como `{{title}}`, `{{date}}`, `{{podcast}}` para un archivo perfectamente organizado.
* **Exportar M3U:** Desde el botón "Exportar M3U" en el encabezado de la lista de episodios, genera una lista de reproducción con las rutas locales de todos los episodios descargados de un podcast.

---

## Consejos Útiles & Solución de Problemas

**El feed no se reconoce:**
Verifica que la URL sea directamente la dirección del archivo RSS (normalmente termina en `.xml` o `.rss`). Algunos sitios muestran una página HTML con un enlace al feed real: usa ese enlace.

**Algunos episodios no se descargan (error 404):**
El episodio ha sido eliminado del servidor del podcast. FeedDownloader Pro registrará el error en el Panel de Descarga sin bloquear otras descargas. Esta es una de las razones por las que el archivado oportuno es fundamental.

**Ruta NAS no accesible:**
Verifica que el NAS esté encendido y sea accesible en la red local antes de iniciar la descarga. Si usas credenciales SMB, asegúrate de que el recurso compartido esté montado (o que las credenciales estén configuradas en Windows).

**El software detuvo la descarga por "espacio en disco insuficiente":**
Libera espacio en el destino y reinicia el lote. Los archivos ya descargados no se volverán a descargar gracias a la base de datos.

---

*Seguridad Garantizada: Cada URL es filtrada por el sistema anti-SSRF de 5 niveles antes de ser procesada.*

*Parte del Ecosystem Runtime | Digital Core — Herramientas construidas para durar.*
