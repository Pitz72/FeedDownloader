# Capítulo 3: Recorrido por la interfaz

## 3.1 Anatomía de la ventana principal

Al abrir FeedDownloader Pro, la ventana está organizada en cuatro zonas funcionales:

*   **Barra de comandos (arriba):** La barra fija que contiene el campo URL, el botón Analizar y el icono de Ajustes. Todas las operaciones para añadir nuevos feeds se inician desde aquí.
*   **Barra lateral de feeds (izquierda):** La columna que contiene la biblioteca permanente de feeds guardados, la pestaña Archivo, los controles de sincronización y el pie de página con la ruta de destino. Su anchura se puede ajustar arrastrando el borde derecho.
*   **Área principal (centro):** El área donde se muestran los episodios del feed seleccionado, con la barra de filtros, los controles de lote y la lista de episodios.
*   **Panel de descarga (derecha, superpuesto):** El panel que se abre automáticamente cuando hay un lote de descargas en curso. Cuando está cerrado, permanece visible un botón flotante en la parte inferior derecha para reabrirlo.

En el primer arranque, con la biblioteca vacía, el área principal muestra un mensaje de guía que explica cómo añadir el primer feed y dónde configurar la ruta de destino. El mensaje desaparece automáticamente al añadir el primer feed, o manualmente mediante el botón ×.

---

## 3.2 La barra de comandos (Arriba)

**Campo URL:** La barra de texto donde se introduce la dirección RSS del podcast a analizar. Acepta URL directas a archivos XML/RSS. Admite **arrastrar y soltar**: puedes arrastrar un enlace directamente desde un navegador sobre esta área.

**Botón «Analizar»:** Inicia el análisis del feed. El software contacta la URL, lee el archivo RSS y rellena la lista de episodios. Al completar el análisis, el feed se añade permanentemente a la barra lateral. La operación suele tardar entre 1 y 5 segundos, según el tamaño del feed y la velocidad de la conexión.

**Icono de Ajustes (⚙):** Abre el panel de ajustes. Accesible en cualquier momento, incluso durante una descarga activa. Para más detalles, ver el Capítulo 10.

---

## 3.3 La barra lateral de feeds

La barra lateral es el centro de control de la biblioteca de podcasts. Contiene todos los feeds añadidos de forma permanente: los feeds no se pierden al cerrar el software.

### Las pestañas Feed y Archivo

En la parte superior de la barra lateral hay dos pestañas:

*   **Pestaña Feed:** Muestra la biblioteca de feeds guardados. Es la vista predeterminada.
*   **Pestaña Archivo:** Muestra la Vista de Archivo — una tabla con todos los episodios descargados en toda la biblioteca. Ver sección 3.10.

### Elementos de la biblioteca de feeds

Cada feed en la lista está representado por una fila que muestra:

*   **Miniatura:** La imagen de portada del podcast.
*   **Título:** El nombre del podcast tal como se declara en el feed RSS.
*   **Fecha:** La fecha de la última sincronización con el servidor.
*   **Distintivo de episodios nuevos:** Un indicador numérico que señala cuántos episodios se han publicado desde la última descarga. El distintivo desaparece después de descargar todos los episodios nuevos.

Hacer clic en un elemento de la lista carga la lista de episodios de ese feed en el área principal.

### Añadir un feed

Pegar la URL RSS en el campo URL en la parte superior de la interfaz y hacer clic en «Analizar». Una vez completado el análisis, el feed se añade automáticamente a la barra lateral y permanece disponible para sesiones posteriores.

### Búsqueda y ordenación

*   **Búsqueda de feeds:** El campo de búsqueda en la barra lateral filtra los feeds por nombre en tiempo real. Útil con bibliotecas grandes.
*   **Ordenación A–Z:** El botón de ordenación ordena los feeds alfabéticamente por título. Volver a hacer clic restaura el orden original.

### Sincronización

*   **Sincronización individual:** Al pasar el cursor sobre un elemento de feed, aparece el icono de sincronización. Al hacer clic en él, el software vuelve a leer el feed desde el servidor y actualiza la lista de episodios con cualquier contenido nuevo.
*   **Sincronizar todo:** El botón «Sincronizar todo» en la parte superior de la barra lateral actualiza todos los feeds en paralelo. Durante la operación, cada miniatura muestra su propio estado: icono giratorio (en curso), marca de verificación verde (completado), icono de error rojo (fallido). El botón informa del progreso en tiempo real (p. ej. `Sincronizando… 3/7`). Los estados permanecen visibles durante 2,5 segundos después de la operación y luego desaparecen.

### Pie de página: ruta de destino

En la parte inferior de la barra lateral se muestra la ruta de la carpeta de destino de descargas, abreviada a los dos últimos componentes (p. ej. `Documentos / Podcasts`). Hacer clic en esta línea abre la carpeta en el explorador de archivos del sistema. Para cambiar la ruta, usar **Ajustes → Archivo**.

### Redimensionamiento

La anchura de la barra lateral se puede ajustar arrastrando el borde derecho (el cursor se convierte en una doble flecha horizontal). La anchura mínima es de 240 px, la máxima de 640 px y el valor predeterminado de 456 px. La configuración se recuerda entre sesiones.

---

## 3.4 La lista de episodios

Tras seleccionar un feed en la barra lateral, el área principal se rellena con la lista de episodios disponibles para ese podcast.

### Encabezado del feed

En la parte superior del área principal es visible el encabezado del feed seleccionado, con miniatura, título del podcast y recuento de episodios. Los principales controles de lote son accesibles desde este encabezado (ver sección 3.7).

### Columnas de la lista

Cada fila de la lista representa un episodio y contiene la siguiente información:

*   **Título:** El nombre del episodio tal como se define en el feed RSS.
*   **Fecha:** La fecha de publicación original del episodio.
*   **Duración:** La duración del episodio (cuando está disponible en el feed).
*   **Tamaño:** El tamaño del archivo. Antes de la descarga, el valor es declarativo (tomado del feed); después de la descarga, refleja el tamaño real del archivo.
*   **Estado:** El indicador visual de estado del episodio individual. Ver sección 3.5.

### Barra de filtros

Debajo del encabezado del feed hay una barra de filtros que permite acotar los episodios mostrados:

*   **Búsqueda de texto:** Filtra por palabras clave en el título (lógica Y: todos los términos introducidos deben estar presentes). El filtro se borra automáticamente al cambiar de feed.
*   **Filtro por estado:** Botones rápidos para mostrar solo los episodios en un estado determinado: Todos, Nuevos (no descargados), Descargados, Errores.
*   **Filtro por fecha:** Campos de fecha «Desde» y «Hasta» para limitar la lista a un intervalo de fechas de publicación.
*   **Filtro por duración:** Limita la lista a los episodios con una duración entre un mínimo y un máximo (en minutos).
*   **Ordenar:** Abre un panel con cinco opciones de ordenación — orden del feed (predeterminado), fecha más reciente, fecha más antigua, duración más larga, duración más corta.

Todos los filtros se borran automáticamente al seleccionar un feed diferente.

### Selección múltiple

Puedes seleccionar varios episodios simultáneamente para iniciar su descarga en bloque:

*   **Ctrl+clic** (o Cmd+clic en macOS): añade o elimina el episodio de la selección individualmente.
*   **Mayús+clic:** selecciona el intervalo entre el último episodio seleccionado y el que se hace clic.
*   Aparece una casilla de verificación al pasar el cursor sobre los episodios no seleccionados y siempre en los episodios seleccionados.

Cuando hay al menos un episodio seleccionado, aparece el botón **«Descargar selección (N)»** en el encabezado del feed. La selección se borra al cambiar de feed y tras iniciar la descarga.

---

## 3.5 Los estados de los episodios

Cada episodio de la lista está marcado con un indicador de estado. Entender estos estados es esencial para interpretar correctamente el estado del archivo.

| Estado | Color | Significado |
|--------|-------|-------------|
| **Por descargar** | Gris | El episodio está presente en el feed pero nunca se ha descargado. |
| **En cola** | Azul | El episodio se ha añadido a la cola y espera su turno en el Panel de descarga. |
| **En curso** | Azul claro animado | La descarga está en curso. La fila muestra el porcentaje, la velocidad y el tiempo estimado en tiempo real. |
| **Completado** | Verde | El archivo se ha descargado, renombrado y verificado correctamente. |
| **Error** | Rojo | La descarga ha fallado después de todos los reintentos automáticos. |
| **Descargado** | Verde atenuado | La base de datos ya registra este episodio como descargado en una sesión anterior. |

*Nota sobre el estado **«Descargado»**:* Este estado es el resultado de la filosofía Database-First. Al analizar un feed ya procesado, la mayoría de los episodios aparecen en este estado: el software ya sabe que están presentes en el archivo. Solo los episodios publicados después de la última descarga aparecerán como **«Por descargar»**.

---

## 3.6 Controles de descarga individuales

A la derecha de cada fila de la lista, al pasar el cursor, aparecen botones de control específicos del episodio. Los botones visibles varían según el estado:

**Para todos los episodios:**

*   **Copiar título** (icono de documento): Copia el título del episodio en el portapapeles del sistema.
*   **Casilla de verificación:** Para la selección múltiple (ver sección 3.4).

**Para episodios Por descargar o con Error:**

*   **Descargar** (flecha hacia abajo): Añade el episodio individual a la cola de descarga.

**Para episodios Completados o Descargados:**

*   **Volver a descargar** (flecha hacia abajo): Añade el episodio nuevamente a la cola, sobrescribiendo el archivo existente.
*   **Restablecer estado** (icono de actualizar): Borra el estado del episodio, devolviéndolo a «Por descargar» sin eliminar el archivo del disco. Útil para forzar un nuevo análisis.
*   **Abrir carpeta** (icono de carpeta): Abre el explorador de archivos del sistema en la ubicación del archivo descargado.

**Interacción con el Panel de detalle:**
Un **clic simple** en la fila del episodio abre el Panel de detalle (ver sección 3.9) con los metadatos completos y las acciones contextuales. Ctrl+clic y Mayús+clic están reservados exclusivamente para la selección múltiple y no abren el panel.

---

## 3.7 Controles de lote

Los controles de lote operan sobre toda la cola de descarga, no sobre episodios individuales. Se encuentran en el encabezado del feed, sobre la barra de filtros.

**«Descargar todo»:** Añade a la cola todos los episodios en estado **«Por descargar»**. Los episodios ya presentes en la base de datos se excluyen automáticamente. El Panel de descarga se abre automáticamente al iniciar.

**«Descargar selección (N)»:** Aparece cuando hay al menos un episodio seleccionado. Inicia la descarga exclusivamente para los episodios seleccionados.

**«Detener»:** Envía una señal de cancelación a todas las descargas activas y vacía la cola. Los archivos ya completados permanecen en la base de datos. Los archivos `.part` se eliminan. En el próximo análisis, los episodios interrumpidos volverán a aparecer como **«Por descargar»**.

**«Exportar M3U»:** Genera una lista de reproducción en formato `.m3u` con las rutas locales absolutas de todos los episodios descargados para ese podcast. Abre un cuadro de diálogo de guardado nativo. El botón solo está disponible cuando hay episodios descargados para el feed actual.

**«Abrir carpeta»** (icono de carpeta en el encabezado): Abre el explorador de archivos en la carpeta de destino del feed actual.

---

## 3.8 El Panel de descarga

El Panel de descarga es el centro de supervisión y control de todas las descargas en curso. Sustituye a la anterior barra de progreso fija en la parte inferior de la interfaz.

### Apertura y cierre

El panel se abre **automáticamente** al iniciar cada lote. Cuando está cerrado, el **botón flotante** (icono circular) es visible en la esquina inferior derecha de la ventana: hacer clic en él reabre el panel. Cerrar el panel no interrumpe las descargas en curso.

### Estructura del panel

*   **Encabezado:** Muestra el contador de archivos completados/total (p. ej. `47 / 312`), el botón Detener para interrumpir todas las descargas y el botón × para cerrar el panel.
*   **Lista de la cola:** Cada descarga en curso o en espera está representada por una fila con: título del episodio, nombre del podcast, porcentaje de progreso, velocidad actual (KB/s o MB/s), tiempo estimado hasta la finalización (p. ej. `2m 30s`), barra de progreso individual. Al pasar el cursor sobre la fila aparece el botón × para cancelar esa descarga individual.
*   **Sección de errores:** Al final del lote, si una o más descargas han fallado, aparece en la parte inferior del panel un resumen desplegable con la lista de episodios no descargados y su código de error.

---

## 3.9 El Panel de detalle del episodio

El Panel de detalle proporciona una vista en profundidad de un episodio individual: metadatos, acciones y — si el episodio ya está en el archivo — datos técnicos del archivo descargado.

### Abrir el panel de detalle

Un **clic simple** en cualquier fila de la lista de episodios abre el panel, que se desliza desde el lado derecho de la ventana (debajo de la barra de comandos). El panel se cierra automáticamente cuando se selecciona un feed diferente en la barra lateral.

*Nota:* Ctrl+clic y Mayús+clic están reservados para la selección múltiple y no abren el panel.

### Contenido del panel

*   **Metadatos básicos:** Fecha de publicación, duración declarada, tamaño del archivo indicado en el feed.
*   **Acciones contextuales:** Los botones disponibles varían según el estado del episodio: Descargar, Volver a descargar, Restablecer estado, Abrir carpeta.
*   **Datos de archivo** (visibles solo si el episodio ya se ha descargado): Fecha y hora de la descarga, tamaño real del archivo, tasa de bits, frecuencia de muestreo, nombre del archivo en el disco, suma de verificación SHA-256.
*   **Enlace fuente:** La URL original del archivo de audio en el feed RSS, con un botón para copiarlo al portapapeles.
*   **Notas del episodio:** El texto descriptivo del episodio extraído del feed (show notes), presentado en formato de texto limpio.

---

## 3.10 La Vista de Archivo

La Vista de Archivo es accesible mediante la pestaña **Archivo** en la barra lateral. A diferencia de la lista de episodios, que muestra solo los episodios de un feed a la vez, la Vista de Archivo reúne en una sola tabla **todos los episodios descargados en toda la biblioteca**, independientemente del podcast al que pertenezcan.

### Funcionalidades

*   **Búsqueda:** El campo de búsqueda filtra por título de episodio o nombre de podcast.
*   **Filtro por podcast:** El menú desplegable permite limitar la visualización a los episodios de un único podcast.
*   **Ordenación:** La tabla se puede ordenar por fecha de descarga, fecha de publicación, tamaño de archivo y tasa de bits.
*   **Estadísticas:** El encabezado de la Vista de Archivo muestra el número total de archivos descargados, el número de podcasts distintos y el tamaño total del archivo en gigabytes.
*   **Mostrar en carpeta:** Al pasar el cursor sobre una fila, aparece el botón que abre el explorador de archivos en la ubicación del archivo en el disco.

La Vista de Archivo se actualiza automáticamente cuando finaliza cada descarga.

---

## 3.11 La Paleta de comandos (Ctrl+K)

La Paleta de comandos es una herramienta de acceso rápido que permite llegar a cualquier función principal del software sin usar el ratón.

### Abrir la paleta de comandos

El atajo **Ctrl+K** (desde cualquier punto de la aplicación, incluso durante una descarga) abre una superposición con un campo de búsqueda central.

### Navegación

*   **Escribir** en el campo de búsqueda filtra las acciones y los feeds en tiempo real.
*   **Las flechas ↑↓** mueven la selección entre los resultados.
*   **Intro** ejecuta la acción seleccionada.
*   **Esc** cierra la paleta sin ejecutar ninguna acción.

### Contenido

*   **Grupo Acciones:** Cinco comandos fijos siempre disponibles: *Abrir ajustes*, *Sincronizar todos los feeds*, *Añadir feed* (focaliza el campo URL), *Ir a la pestaña Archivo*, *Ir a la pestaña Feed*.
*   **Grupo Feeds:** Cuando el campo de búsqueda está vacío, muestra los primeros cinco feeds de la biblioteca. Al escribir, filtra los feeds por título. Seleccionar un feed desde la paleta lo carga directamente en el área principal.

---

## 3.12 El icono en la bandeja del sistema

Cuando la ventana principal se cierra haciendo clic en la X, FeedDownloader Pro no termina el proceso: se minimiza en el área de notificaciones del sistema (bandeja del sistema, cerca del reloj de Windows o macOS). Este comportamiento es intencionado: las descargas continúan en segundo plano mientras la ventana no es visible.

**Menú contextual de la bandeja (clic derecho sobre el icono):**

*   **Abrir FeedDownloader Pro:** Devuelve la ventana principal al primer plano.
*   **Estado de descargas:** Muestra una línea resumen de la actividad en curso.
* **Salir:** Cierra el programa y detiene todas las descargas activas.

*Nota práctica:* Para ejecutar una descarga grande sin mantener la ventana abierta, iniciar el lote, cerrar la ventana y dejar el ordenador en funcionamiento. El archivo estará disponible una vez completado el proceso.

---

*Ir al Capítulo 4 para un flujo de trabajo completo desde el primer análisis hasta la descarga.*
