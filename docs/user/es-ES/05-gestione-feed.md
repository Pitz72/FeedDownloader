# Capítulo 5: Gestión de Feeds

## 5.1 Qué es un Feed RSS

Un feed RSS es un documento XML publicado por un podcast para permitir que las aplicaciones lean automáticamente la lista de episodios disponibles. Cuando un editor publica un nuevo episodio, actualiza este documento añadiendo una nueva entrada. Las aplicaciones de podcast leen periódicamente estos documentos para identificar los contenidos más recientes.

Para FeedDownloader Pro, el feed RSS es la **fuente primaria de datos**: contiene la lista de episodios, las URL de los archivos de audio, los metadatos (título, fecha, duración, descripción, portada) y la información general del podcast (nombre, autor, categoría).

El conocimiento de la estructura interna de un feed RSS no es necesario para usar el software, pero facilita la interpretación de los datos mostrados en la lista de episodios y la comprensión de las causas de posibles informaciones faltantes o incompletas.

---

## 5.2 Feeds Válidos y Feeds Problemáticos

No todos los feeds RSS respetan el mismo nivel de conformidad con los estándares.

**Feed bien formado:** Sigue el estándar RSS 2.0 o Atom, incluye todos los campos obligatorios (título, enlace, fecha de publicación, URL de audio con tipo MIME) y, opcionalmente, las etiquetas iTunes/Podcast Index para duración, portada y temporadas. FeedDownloader Pro lee estos feeds sin problemas.

**Feed parcialmente incompleto:** Faltan algunos campos opcionales (duración, tamaño del archivo, portada del episodio). El software descarga los archivos de audio de todas formas, pero algunas columnas de la lista permanecerán vacías.

**Feed con URL de audio no accesibles:** El feed es legible, pero las URL de los archivos de audio apuntan a recursos que ya no existen (error 404). Esta situación es frecuente con podcasts abandonados o migrados a otros servidores. FeedDownloader Pro marca estos episodios con estado **"Error"** tras el intento de descarga.

**Feed protegido por autenticación:** Algunos podcasts privados o de pago requieren credenciales HTTP Basic para acceder al feed. El software admite estos feeds: las credenciales se incluyen directamente en la URL con el formato `https://usuario:contraseña@www.ejemplo.es/feed.xml`.

---

## 5.3 Analizar un Feed: Detalle

Cuando se hace clic en **"Analizar"**, FeedDownloader Pro ejecuta las siguientes operaciones en secuencia:

1.  **Validación de URL:** Verifica que la URL sea sintácticamente correcta y que supere los 5 controles anti-SSRF (véase el Capítulo 10 para más detalles).
2.  **Solicitud HTTP:** Contacta el servidor del feed con un user-agent estándar. El timeout para esta operación es de 30 segundos.
3.  **Análisis XML:** Lee y analiza el documento RSS o Atom. El software gestiona feeds con leves desviaciones de los estándares (codificación no declarada, etiquetas faltantes, namespaces no convencionales).
4.  **Deduplicación:** Para cada episodio del feed, se consulta la base de datos para verificar si el episodio ya se ha descargado. La URL del audio se utiliza como clave de identificación única.
5.  **Relleno de la lista:** Todos los episodios se muestran con su estado actual.
6.  **Adición a la biblioteca:** El feed se inserta permanentemente en la barra lateral si no está ya presente. Los feeds ya en la biblioteca se actualizan con el recuento de episodios más reciente.

---

## 5.4 La Biblioteca de Feeds

FeedDownloader Pro mantiene una **biblioteca permanente de feeds**. Cada feed analizado se guarda en la barra lateral y permanece disponible entre las sesiones, sin necesidad de reintroducir la URL en cada arranque.

### Visualización

Cada elemento de la biblioteca muestra: la carátula del podcast (miniatura), el título, la fecha de la última sincronización con el servidor y un distintivo numérico que indica cuántos episodios se han publicado desde la última descarga. El distintivo desaparece en cuanto se descargan todos los nuevos episodios.

Al hacer clic en un feed de la barra lateral, la lista de episodios se actualiza inmediatamente en el área principal.

### Eliminar un feed de la biblioteca

Para eliminar un feed, pasar el ratón sobre el elemento en la barra lateral: aparece el botón papelera en el extremo derecho de la fila. Al pulsarlo se abre una ventana de confirmación. La eliminación borra el feed de la biblioteca pero **no elimina los archivos de audio ya descargados** ni los datos relacionados en la base de datos; los episodios permanecen visibles en la Vista de Archivo.

### Búsqueda y ordenación

*   **Búsqueda de feeds:** El campo de búsqueda en la parte superior de la barra lateral filtra los feeds por nombre en tiempo real. Útil con bibliotecas de gran tamaño.
*   **Ordenación A–Z:** El botón de ordenación organiza los feeds alfabéticamente por título. Al hacer clic de nuevo se restaura el orden original.

*Nota sobre la privacidad:* La biblioteca de feeds se guarda exclusivamente en la base de datos local. Ningún dato se transmite a servidores externos.

---

## 5.5 Importar Feeds desde OPML

**OPML** (Outline Processor Markup Language) es el formato estándar para la exportación e importación de listas de podcasts entre distintas aplicaciones. Si se dispone de una biblioteca de podcasts en una app como Pocket Casts, Overcast, AntennaPod o cualquier otro cliente, es posible exportarla en OPML e importarla directamente en FeedDownloader Pro.

**Cómo importar un archivo OPML:**

1.  Ir a **Ajustes → Archivo**, sección «Datos y portabilidad».
2.  Hacer clic en **Importar feeds (OPML)** y seleccionar el archivo `.opml` exportado desde la aplicación de podcast.
3.  FeedDownloader Pro analiza el archivo y añade los feeds identificados a la biblioteca.

*Nota:* Algunas aplicaciones de podcast utilizan variantes propietarias del formato OPML. FeedDownloader Pro admite las versiones más extendidas. Si un archivo no se importa correctamente, abrirlo con un editor de texto y verificar la presencia de etiquetas `<outline type="rss" xmlUrl="...">` para cada podcast.

---

## 5.6 Exportar la Biblioteca en OPML

Es posible exportar la biblioteca de feeds en formato OPML para:

*   Crear una copia de seguridad de la lista de podcasts.
*   Compartirla con otros usuarios o con otra instalación del software.
*   Importarla en una aplicación de podcast para seguir los mismos feeds.

**Cómo exportar:**

1.  Ir a **Ajustes → Archivo**, sección «Datos y portabilidad».
2.  Hacer clic en **Exportar feeds (OPML)** y elegir un nombre y una ubicación para el archivo.
3.  El archivo generado es compatible con cualquier aplicación que admita el estándar OPML.

---

## 5.7 Feeds de Gran Tamaño

Algunos podcasts históricos o archivos de producción radiofónica pueden tener feeds con miles de episodios y archivos RSS de dimensiones considerables. En estos casos:

*   **El análisis inicial requiere más tiempo:** Un feed con 2.000 episodios puede necesitar 15–30 segundos para la descarga y el análisis. Este comportamiento es esperado.
*   **Virtualización de la lista:** Con miles de entradas, la lista carga únicamente las filas visibles en pantalla para mantener la interfaz ágil.
*   **Estimación del espacio necesario:** Con 2.000 episodios a unos 50 MB cada uno, el volumen total es de aproximadamente 100 GB. Verificar que haya espacio suficiente antes de continuar.

---

## 5.8 Gestión de Múltiples Feeds

FeedDownloader Pro gestiona de forma nativa una biblioteca de múltiples feeds. No hay límite en el número de podcasts que se pueden añadir: todos se conservan en la barra lateral y permanecen accesibles entre una sesión y otra.

### Navegar entre los feeds

Al hacer clic en un feed de la barra lateral, la lista de episodios del área principal se actualiza inmediatamente. El software recuerda qué feed estaba seleccionado en el último cierre.

### Sincronizar los feeds

*   **Sincronización individual:** Pasar el ratón sobre un elemento de feed en la barra lateral para mostrar el icono de sincronización. Al hacer clic, el software relee ese feed desde el servidor y actualiza la lista con los posibles nuevos episodios.
*   **Sincronizar todo:** El botón «Sincronizar todo» actualiza todos los feeds en paralelo con una única operación. Durante el proceso, cada miniatura de la barra lateral muestra su propio estado en tiempo real. Al finalizar, los posibles nuevos episodios se destacan con el distintivo de episodios nuevos.

Para la actualización automática programada sin intervención manual, véase la sección 5.9.

---

## 5.9 Actualización Automática de los Feeds

FeedDownloader Pro puede sincronizar automáticamente todos los feeds a intervalos regulares, en segundo plano, sin requerir ninguna acción por parte del usuario.

### Configuración

El ajuste se encuentra en **Ajustes → General → Actualización automática de feeds**. Hay cuatro opciones disponibles:

| Opción | Comportamiento |
|--------|----------------|
| **Desactivado** (predeterminado) | Sin sincronización automática. |
| **Cada 6 horas** | El software sincroniza todos los feeds cada 6 horas desde el arranque. |
| **Cada 12 horas** | El software sincroniza todos los feeds cada 12 horas desde el arranque. |
| **Cada 24 horas** | El software sincroniza todos los feeds una vez cada 24 horas desde el arranque. |

El cambio del ajuste es inmediato y no requiere reiniciar el software. El temporizador parte desde el arranque de la aplicación.

### Comportamiento

La actualización automática **no inicia descargas**: se limita a comprobar si se han publicado nuevos episodios. Si durante la sincronización automática se encuentran nuevos episodios en uno o más feeds, el sistema envía una **notificación del sistema operativo** con el resumen de los contenidos encontrados (disponible en los 8 idiomas admitidos).

Para descargar los nuevos episodios señalados, abrir el software y usar los controles habituales del batch.

---

*Véase el Capítulo 6 para una descripción detallada del motor de descarga.*
