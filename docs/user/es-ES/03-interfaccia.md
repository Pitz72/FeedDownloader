# Capítulo 3: Tour de la Interfaz

## 3.1 Anatomía de la Ventana Principal

Al abrir FeedDownloader Pro, la interfaz está organizada verticalmente en tres zonas funcionales:

*   **Zona de comandos (arriba):** La barra de introducción de URL y los controles principales. Desde aquí se inician todas las operaciones.
*   **Zona de trabajo (en el centro):** El área principal, donde se muestran los episodios analizados con su información correspondiente y los controles de descarga individuales.
*   **Zona de estado (abajo):** La barra de avance global con información sobre el batch en curso.

---

## 3.2 La Barra de Comandos (Arriba)

**Campo URL:** La barra de texto donde se introduce la dirección RSS del podcast que se desea analizar. Acepta URL directas a archivos XML/RSS. Admite **drag and drop**: es posible arrastrar un enlace directamente desde un navegador sobre esta área.

**Botón "Analizar":** Inicia el análisis del feed. El software contacta la URL, lee el archivo RSS y rellena la lista de episodios. La operación generalmente requiere entre 1 y 5 segundos, según el tamaño del feed y la velocidad de la conexión.

**Campo Ruta de Destino:** Indica la carpeta en la que se guardarán los archivos descargados. Al hacer clic en el icono de carpeta adyacente se abre la ventana de selección. La ruta configurada se mantiene entre sesiones.

**Icono Configuración (⚙):** Abre el panel de configuración. Es accesible en cualquier momento, incluso durante una descarga en curso. Para más detalles, véase el Capítulo 10.

---

## 3.3 La Lista de Episodios (En el Centro)

Tras el análisis de un feed, esta área se rellena con la lista de episodios disponibles. Cada fila representa un episodio y contiene la siguiente información.

**Columnas principales:**

*   **Título:** El nombre del episodio tal como se define en el feed RSS.
*   **Fecha:** La fecha de publicación original del episodio.
*   **Duración:** La duración del episodio (cuando está disponible en el feed).
*   **Tamaño:** El tamaño estimado del archivo (cuando está disponible en el feed). Antes de la descarga, el dato es declarativo; tras la descarga, refleja el tamaño real del archivo.
*   **Estado:** El indicador visual del estado de cada episodio. Véase la sección 3.4.
*   **Acciones:** Los botones de control individuales para cada episodio.

**Ordenación:**
Los encabezados de columna se pueden pulsar para ordenar la lista (por fecha, por título, por tamaño). El comportamiento predeterminado es mostrar los episodios más recientes al principio.

**Selección múltiple:**
Manteniendo pulsado `Ctrl` y haciendo clic en varios episodios es posible seleccionarlos individualmente. `Shift` + clic selecciona un intervalo. Sobre los episodios seleccionados se pueden aplicar acciones colectivas (iniciar descarga, eliminar de la lista).

---

## 3.4 Los Estados de los Episodios

Cada episodio de la lista está marcado con un indicador de estado con color. Comprender estos estados es esencial para interpretar correctamente la situación del archivo.

| Estado | Color | Significado |
|--------|-------|-------------|
| **Por descargar** | Gris | El episodio está presente en el feed pero nunca se ha descargado. |
| **En cola** | Azul | El episodio se ha añadido a la cola y espera su turno. |
| **En progreso** | Azul animado | La descarga está en curso. La celda también muestra el porcentaje de avance. |
| **Completado** | Verde | El archivo se ha descargado, renombrado y verificado correctamente. |
| **Error** | Rojo | La descarga no se completó tras todos los intentos automáticos. El tooltip muestra el código de error. |
| **Descargado** | Verde tenue | La base de datos ya registra este episodio como descargado. No se volverá a descargar. |

*Nota sobre el estado **"Descargado"**:* Este estado es el resultado de la filosofía Database-First. Cuando se analiza un feed ya procesado anteriormente, la mayoría de los episodios aparecen en este estado: el software ya sabe que están presentes en el archivo. Solo los episodios publicados después de la última descarga aparecerán como **"Por descargar"**.

---

## 3.5 Los Controles de Descarga Individuales

A la derecha de cada fila de la lista hay dos botones.

**Icono Descarga (↓):** Añade el episodio individual a la cola de descarga. Si el episodio ya está en estado **"Completado"** o **"Descargado"**, el sistema solicita confirmación antes de proceder a una nueva descarga forzada.

**Icono Información (ℹ):** Abre un panel con los detalles completos del episodio: URL original del audio, URL de la imagen de portada, descripción extendida, ruta del archivo en el disco (si ya se ha descargado), hash SHA-256 y metadatos técnicos. Este panel es útil para la verificación y el diagnóstico del archivo.

---

## 3.6 Los Controles del Batch (Arriba, Área Derecha)

Estos botones actúan sobre toda la cola de descarga, no sobre los episodios individuales.

**"Descargar todo":** Añade a la cola todos los episodios en estado **"Por descargar"**. Los episodios ya presentes en la base de datos se excluyen automáticamente.

**"Detener":** Interrumpe el batch y vacía la cola. Los archivos ya completados permanecen en la base de datos. Los archivos `.part` se eliminan. En el próximo análisis del mismo feed, los episodios interrumpidos aparecerán de nuevo como **"Por descargar"**.

---

## 3.7 La Barra de Avance Global (Abajo)

La barra inferior siempre está visible y muestra el estado general del batch en curso:

*   **Barra de avance:** Relleno proporcional al número de archivos completados sobre el total de la cola.
*   **Contador de archivos:** Por ejemplo, `47 / 312 episodios` — número de archivos completados sobre el total de la cola.
*   **Velocidad media:** Velocidad de descarga agregada de todos los threads activos, expresada en MB/s o KB/s.
*   **Tiempo estimado:** Estimación del tiempo restante para completar el batch, calculada sobre la velocidad media de los últimos 30 segundos.

*Nota:* La estimación del tiempo restante puede variar significativamente en las primeras fases de una descarga, cuando los datos disponibles para el cálculo son todavía limitados. Se vuelve más fiable después de los primeros 10–15 archivos completados.

---

## 3.8 El Icono en el System Tray

Cuando se cierra la ventana principal haciendo clic en la X, FeedDownloader Pro no finaliza el proceso: se minimiza en el área de notificación del sistema (system tray, junto al reloj de Windows o macOS). Este comportamiento es intencionado: las descargas continúan en segundo plano mientras la ventana no está visible.

**Menú contextual del tray (clic derecho en el icono):**
*   **Abrir FeedDownloader Pro:** Trae al primer plano la ventana principal.
*   **Estado de descarga:** Muestra una línea de resumen (p. ej., `Downloading: 3 active, 47/312 completed`).
*   **Salir:** Cierra el programa e interrumpe todas las descargas activas.

*Nota práctica:* Para realizar una descarga de gran tamaño sin mantener la ventana abierta, iniciar el batch, cerrar la ventana y dejar el equipo en funcionamiento. El archivo estará disponible al finalizar el proceso.

---

*Véase el Capítulo 4 para un flujo de trabajo completo desde el primer análisis hasta la descarga.*
