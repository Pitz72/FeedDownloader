# Capítulo 4: El Primer Archivo — Guía Paso a Paso

## 4.1 Introducción al Flujo de Trabajo

Este capítulo describe un flujo de trabajo completo, desde la URL de un podcast hasta un archivo ordenado en el disco. El escenario de referencia es el más habitual: descargar todo el catálogo de un podcast por primera vez.

Se recomienda leer el capítulo de principio a fin al menos una vez. Una vez familiarizado con los pasos, iniciar un nuevo archivo requiere menos de un minuto.

---

## 4.2 Fase 1: Encontrar la URL RSS

El punto de partida es la URL del feed RSS del podcast que se desea archivar. Un feed RSS es un archivo de texto en formato XML que los servicios de podcast publican para distribuir la lista de episodios disponibles. Cada podcast dispone de un feed RSS.

**Cómo encontrar la URL RSS:**

*   **En el sitio web del podcast:** Buscar un icono naranja con ondas de radio, o los textos "RSS", "Feed", "Subscribe" o "Podcast Feed". Al hacer clic en el elemento, generalmente se abre el archivo XML en el navegador: la URL que aparece en la barra de direcciones es la que se debe usar.
*   **Desde una app de podcast:** Aplicaciones como Pocket Casts, Apple Podcasts y similares suelen mostrar el enlace RSS en la información del podcast. En algunas apps el enlace es accesible a través de la función «Compartir».
*   **Desde servicios de hosting:** Si el podcast está alojado en Spreaker, Podbean, Buzzsprout o plataformas equivalentes, la URL del feed suele estar disponible en el panel del editor o en la información pública del podcast.
*   **Desde un motor de búsqueda:** Buscar `[Nombre del Podcast] RSS feed`. El primer resultado suele llevar directamente a la URL correcta.

*Cómo reconocer una URL RSS válida:* Generalmente termina en `.xml` o `.rss`, o bien contiene palabras como `feed`, `rss` o `podcast` en la ruta. Ejemplos: `https://www.ejemplo.es/feed.xml`, `https://feeds.spreaker.com/podcast/12345`, `https://anchor.fm/s/abc123/podcast/rss`.

---

## 4.3 Fase 2: Preparar la Carpeta de Destino

Antes de analizar el feed, conviene definir la carpeta de destino. Se recomienda crear una estructura organizada desde el principio.

**Estructura recomendada:**
```
D:\Archivo Podcast\
    ├── Mi Podcast\
    ├── Podcast de Tecnología\
    └── Radio Talk Show\
```

Crear la carpeta específica para el podcast que se va a archivar (p. ej., `D:\Archivo Podcast\Mi Podcast\`). FeedDownloader Pro guardará todos los archivos de ese podcast en esa carpeta, con los nombres definidos por la plantilla de renombrado (véase el Capítulo 8).

**Para configurar la carpeta de destino en FeedDownloader Pro:**

1.  Abrir **Ajustes → Archivo** y hacer clic en el icono de **carpeta** junto al campo de ruta de destino.
2.  Navegar hasta la carpeta creada y seleccionarla.
3.  La ruta configurada siempre es visible en el pie de página de la barra lateral izquierda; hacer clic en ella abre la carpeta directamente en el gestor de archivos.

*Nota:* Para las rutas en NAS o discos de red, consultar el Capítulo 7 antes de continuar. La configuración para rutas de red tiene algunas particularidades descritas en ese capítulo.

---

## 4.4 Fase 3: Analizar el Feed

Con la URL lista y la carpeta de destino configurada:

1.  Pegar la URL RSS en el **campo URL** en la parte superior de la interfaz.
2.  Hacer clic en **"Analizar"** (o pulsar `Intro`).
3.  La lista del centro se rellena con los episodios. Para un podcast con 200–300 episodios la operación requiere típicamente 2–5 segundos. Para archivos muy grandes (1000+ episodios), pueden ser necesarios hasta 15–20 segundos, ya que el archivo XML del feed puede alcanzar dimensiones considerables.

**En caso de error de análisis:**
*   Verificar que la URL sea correcta (sin espacios al inicio o al final, sin caracteres faltantes).
*   Abrir la URL en el navegador: si el navegador devuelve un error o una página vacía, el feed podría estar temporalmente no disponible o la URL podría haber cambiado.
*   Algunos feeds requieren cabeceras HTTP específicas. En este caso el software muestra un mensaje de error con el código HTTP recibido (por ejemplo, `403 Forbidden`).

---

## 4.5 Fase 4: Leer los Resultados del Análisis

Tras el análisis, la lista muestra todos los episodios del podcast.

**Elementos a verificar:**
*   **Número total de episodios:** Visible en el encabezado de la lista o en el contador inferior. Un podcast activo desde hace varios años puede tener 300–500 episodios o más.
*   **Episodios en estado **"Descargado"**:** Si el podcast ya se ha analizado anteriormente, la mayoría de los episodios aparecerán en este estado. La base de datos ya registra estos archivos como presentes en el archivo.
*   **Episodios con datos faltantes:** Es posible que algunos episodios no muestren duración o tamaño. Esto indica que el productor del podcast no ha incluido esta información en el archivo RSS. La descarga se ejecuta correctamente en cualquier caso.

---

## 4.6 Fase 5: Iniciar la Descarga

Hay dos modos de descarga disponibles.

**Modo A — Descarga completa:**
Hacer clic en **"Descargar todo"**. El software añade a la cola todos los episodios en estado **"Por descargar"** e inicia las descargas en paralelo. El número de descargas simultáneas depende de la configuración de threads (véase el Capítulo 10; el valor predeterminado es 3).

**Modo B — Descarga selectiva:**
Para descargar solo determinados episodios:
1.  Seleccionar los episodios manteniendo pulsado `Ctrl` y haciendo clic en cada uno.
2.  Para seleccionar un intervalo, hacer clic en el primer episodio, mantener pulsado `Shift` y hacer clic en el último.
3.  Hacer clic en el botón **«Descargar selección (N)»** que aparece en el encabezado del feed cuando hay al menos un episodio seleccionado.

---

## 4.7 Fase 6: Monitorizar el Progreso

Durante la descarga:

*   **Panel de descarga:** Se abre automáticamente en el lado derecho de la ventana al iniciar el batch. Muestra cada episodio en cola con porcentaje, velocidad actual y tiempo estimado hasta la finalización. Para un archivo de 200 episodios a una media de 64 kbps, el volumen de datos total es de aproximadamente 2–3 GB.
*   **Estado en la lista:** Cada fila se actualiza en tiempo real. Los episodios en curso muestran una barra de avance individual con el porcentaje completado.
*   **Ejecución en segundo plano:** No es necesario mantener la ventana abierta. Se puede cerrar (el programa continúa funcionando en el system tray) y volver a abrirla al completarse el proceso.

El software gestiona automáticamente los reintentos en caso de error de red, la detección de estancamiento ante servidores lentos y la verificación de integridad al completarse cada archivo. Si el equipo entra en modo de suspensión, las descargas se interrumpen y se reanudan automáticamente al restaurarse la sesión.

---

## 4.8 Fase 7: Verificar el Archivo Completado

Cuando el Panel de descarga muestra el batch como completado y todos los episodios aparecen en estado verde, el archivo está listo.

**Operaciones recomendadas al completar:**

1.  **Comprobar los errores:** Si algunos episodios muestran el estado **"Error"** (rojo), hacer clic en ellos para abrir el Panel de detalle del episodio y leer el código de error. Alternativamente, consultar la sección de resumen de errores en la parte inferior del Panel de descarga. La causa más común es `404 Not Found`, que indica la eliminación del archivo del servidor del podcast antes de la descarga.

2.  **Exportar un resumen CSV:** Ir a **Configuración → Archivo → Exportar CSV**. El archivo generado enumera todos los episodios descargados con hash SHA-256, tamaños y metadatos (véase el Capítulo 9).

3.  **Verificar los archivos en el disco:** Abrir la carpeta de destino en el gestor de archivos. Los archivos de audio están organizados según la plantilla de renombrado configurada (véase el Capítulo 8). La presencia de archivos `.part` indica descargas interrumpidas, que se completarán en el próximo inicio del batch.

---

## 4.9 Actualizar el Archivo en el Futuro

El sistema Database-First simplifica las actualizaciones del archivo. El procedimiento varía según si el feed ya está en la biblioteca o no.

**Feed ya en la barra lateral:**

1.  Hacer clic en el feed en la barra lateral para seleccionarlo.
2.  Pasar el ratón sobre el elemento y hacer clic en el icono de sincronización, o usar el botón **«Sincronizar todo»** para actualizar toda la biblioteca en paralelo.
3.  Los nuevos episodios aparecen en estado **"Por descargar"**; los ya presentes permanecen como **"Descargado"**.
4.  Hacer clic en **"Descargar todo"** para descargar únicamente los episodios nuevos.

**Feed aún no en la biblioteca:**

Pegar la URL RSS en el campo URL en la parte superior de la interfaz y hacer clic en **"Analizar"**: el feed se añade a la biblioteca y la lista se rellena con el estado actual.

El sistema nunca descarga el mismo episodio dos veces. También se puede configurar una actualización automática periódica (véase el Capítulo 10 y la sección 5.9).

---

*Véase el Capítulo 5 para profundizar en la gestión de feeds y las funcionalidades OPML.*
