# Capítulo 9: Integridad, Estadísticas y Almacenamiento

## 9.1 Por Qué Verificar la Integridad de los Archivos

El hecho de que una descarga se complete no garantiza que el archivo recibido esté íntegro. Un paquete de red perdido durante la transferencia, un error de escritura en disco o una interrupción en el último segundo pueden producir un archivo formalmente «presente» pero dañado. Sin una verificación explícita, un archivo aparentemente completo puede contener archivos de audio no reproducibles, cuya corrupción solo se detecta durante la reproducción.

FeedDownloader Pro aborda este problema con dos mecanismos complementarios: la **verificación de tamaño** (durante la descarga) y la **verificación SHA-256** (al completarse).

---

## 9.2 La Verificación SHA-256

**SHA-256** (Secure Hash Algorithm de 256 bits) es una función criptográfica que produce una huella digital de 64 caracteres hexadecimales para cualquier archivo. Dos archivos idénticos producen siempre el mismo hash; una diferencia de incluso un solo bit produce un hash completamente distinto.

Por cada archivo descargado, FeedDownloader Pro:
1.  Calcula el hash SHA-256 del archivo al finalizar la descarga.
2.  Guarda el hash en la base de datos, junto con la ruta del archivo y la fecha de cálculo.
3.  Si el feed RSS incluye un hash de referencia (algunos feeds modernos incluyen el campo `<podcast:integrity>`), lo compara con el calculado. En caso de discrepancia, el archivo se marca como **"Dañado"** y se vuelve a añadir a la cola para una nueva descarga.

**Usos prácticos:**
*   Es posible verificar en cualquier momento futuro que un archivo no haya sido modificado, dañado o reemplazado: basta con recalcular el hash y compararlo con el registrado en la base de datos.
*   Tras mover los archivos a un nuevo disco o realizar una migración, el **Health Check** (véase la sección 9.4) permite verificar que todos los archivos sigan presentes.
*   En contextos profesionales, el hash SHA-256 constituye una referencia verificable de la integridad del contenido en el momento de la descarga.

---

## 9.3 Los Metadatos de Audio Extraídos

Al completarse cada descarga, FeedDownloader Pro extrae automáticamente los **metadatos técnicos** del archivo de audio. Esta información se lee directamente del archivo (no del feed RSS) y se registra en la base de datos.

**Metadatos extraídos:**

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Bitrate** | Calidad de audio en kilobits por segundo | `128 kbps`, `320 kbps` |
| **Sample rate** | Frecuencia de muestreo | `44100 Hz`, `48000 Hz` |
| **Tamaño en disco** | Tamaño real del archivo descargado | `67,4 MB` |

Estos valores se registran en la base de datos y se incluyen en la exportación CSV (véase la sección 9.6).

---

## 9.4 Health Check: Verificación de Integridad del Archivo

Con el tiempo, un archivo puede sufrir modificaciones externas al software: archivos movidos o eliminados directamente desde el sistema de archivos. El **Health Check** verifica el estado del archivo respecto a lo registrado en la base de datos.

**Cómo ejecutar el Health Check:**
Ir a **Configuración → Archivo → Health Check** y hacer clic en **"Iniciar verificación"**.

El proceso analiza cada archivo registrado en la base de datos y verifica que el archivo exista todavía en la ruta registrada. Al finalizar, se muestra un resumen con tres indicadores:

| Indicador | Significado |
|-----------|-------------|
| **Total** | Número total de episodios en la base de datos |
| **Presentes** | Archivos que existen en la ruta registrada |
| **Faltantes** | Archivos no encontrados en la ruta registrada |

La pantalla también muestra el **espacio en disco total** ocupado por los archivos presentes.

Si hay archivos faltantes, el software enumera los primeros 5 con el nombre del podcast y el nombre del archivo. Para recuperar un archivo faltante, usar la función **"Forzar nueva descarga"** disponible en el menú contextual del episodio en la lista principal.

---

## 9.5 Estadísticas del Archivo

La sección de estadísticas es accesible desde **Configuración → Archivo** y proporciona una visión general sintética de los datos registrados en la base de datos:

*   **Archivos descargados:** Número total de episodios presentes en la base de datos.
*   **Podcasts:** Número de feeds distintos representados en el archivo.
*   **Intervalo temporal:** Fecha del primer y del último episodio descargado.

Las estadísticas se actualizan automáticamente cada vez que se abre el panel de Configuración.

---

## 9.6 Exportación CSV

La exportación CSV genera un archivo con los datos de cada episodio presente en la base de datos. Es útil para integrar FeedDownloader Pro con otras herramientas (hojas de cálculo, sistemas de gestión de contenidos, scripts de automatización).

**Cómo exportar:**
Ir a **Configuración → Archivo → Exportar CSV** y elegir la ruta donde guardar el archivo.

**Columnas de la exportación:**

| Columna | Contenido |
|---------|-----------|
| `Podcast` | Nombre del podcast |
| `Episode Title` | Título del episodio |
| `Publish Date` | Fecha de publicación |
| `Downloaded At` | Fecha y hora de la descarga |
| `File Size (bytes)` | Tamaño del archivo en bytes |
| `Bitrate (kbps)` | Bitrate de audio en kilobits por segundo |
| `Sample Rate (Hz)` | Frecuencia de muestreo en hercios |
| `SHA-256 Checksum` | Hash SHA-256 del archivo |
| `Validation Status` | Resultado del último control de integridad |
| `GUID` | Identificador único del episodio en el feed RSS |

*Formato del archivo:* CSV con separador de coma (`,`), codificación UTF-8 con BOM (para compatibilidad con Microsoft Excel). Los campos que contienen comas van entre comillas.

---

## 9.7 Migración del Archivo

Para mover el archivo a un nuevo disco o una nueva carpeta, usar la función integrada de migración, que mantiene la base de datos sincronizada con la nueva ubicación de los archivos.

**Procedimiento:**
1.  Ir a **Configuración → Archivo → Migrar archivo**.
2.  Seleccionar la **nueva carpeta de destino** mediante la ventana de selección.
3.  El software mueve físicamente todos los archivos de audio a la nueva carpeta y actualiza las rutas en la base de datos.
4.  Al finalizar se muestra un resumen: número de archivos movidos y posibles errores.

*Atención:* La migración mueve los archivos de la carpeta actual a la nueva. Los archivos se eliminan de la ubicación original. Verificar que el disco de destino disponga de espacio suficiente antes de iniciar la operación.

*Traslado a un nuevo equipo:* Copiar tanto la carpeta de archivos de audio como el archivo `feeddownloader.db` (desde la carpeta de datos de usuario descrita en el Capítulo 2). En el nuevo equipo, instalar FeedDownloader Pro, copiar la base de datos en la carpeta de datos de usuario y usar la función de migración si la ruta del archivo ha cambiado.

---

*Véase el Capítulo 10 para la configuración avanzada del software.*
