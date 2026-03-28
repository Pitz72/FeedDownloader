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

---

## 5.4 Historial de Feeds

FeedDownloader Pro mantiene un **historial de feeds analizados**. Cada URL introducida en el campo de búsqueda se memoriza junto con el nombre del podcast y el número de episodios, para simplificar los accesos futuros.

**Acceder al historial:**
Hacer clic en la flecha a la derecha del campo URL o empezar a escribir: el software propone sugerencias automáticas basadas en el historial.

**Gestionar el historial:**
En la configuración es posible ver la lista completa de feeds en el historial, eliminar entradas individuales o vaciar completamente la lista.

*Nota sobre la privacidad:* El historial se guarda exclusivamente en la base de datos local `feeddownloader.db`. Ningún dato se transmite a servidores externos.

---

## 5.5 Importar Feeds desde OPML

**OPML** (Outline Processor Markup Language) es el formato estándar para la exportación e importación de listas de podcasts entre distintas aplicaciones. Si se dispone de una biblioteca de podcasts en una app como Pocket Casts, Overcast, AntennaPod o cualquier otro cliente, es posible exportarla en OPML e importarla directamente en FeedDownloader Pro.

**Cómo importar un archivo OPML:**
1.  Ir a **Configuración → Archivo**, sección «Datos y portabilidad».
2.  Seleccionar el archivo `.opml` exportado desde la aplicación de podcast.
3.  FeedDownloader Pro analiza el archivo y muestra la lista de podcasts encontrados, con la posibilidad de seleccionar los de interés.
4.  Los feeds seleccionados se añaden al historial y, opcionalmente, se analizan en secuencia automática.

*Nota:* Algunas aplicaciones de podcast utilizan variantes propietarias del formato OPML. FeedDownloader Pro admite las versiones más extendidas. Si un archivo no se importa correctamente, abrirlo con un editor de texto y verificar la presencia de etiquetas `<outline type="rss" xmlUrl="...">` para cada podcast.

---

## 5.6 Exportar la Biblioteca en OPML

Es posible exportar el historial de feeds en formato OPML para:
*   Crear una copia de seguridad de la lista de podcasts.
*   Compartirla con otros usuarios o con otra instalación del software.
*   Importarla en una aplicación de podcast para seguir los mismos feeds.

**Cómo exportar:**
1.  Ir a **Configuración → Archivo**, sección «Datos y portabilidad».
2.  Elegir un nombre y una ubicación para el archivo `.opml`.
3.  El archivo generado es compatible con cualquier aplicación que admita el estándar OPML.

---

## 5.7 Feeds de Gran Tamaño

Algunos podcasts históricos o archivos de producción radiofónica pueden tener feeds con miles de episodios y archivos RSS de dimensiones considerables. En estos casos:

*   **El análisis inicial requiere más tiempo:** Un feed con 2.000 episodios puede necesitar 15–30 segundos para la descarga y el análisis. Este comportamiento es esperado.
*   **Virtualización de la lista:** Con miles de entradas, la lista carga únicamente las filas visibles en pantalla para mantener la interfaz ágil.
*   **Estimación del espacio necesario:** Con 2.000 episodios a unos 50 MB cada uno, el volumen total es de aproximadamente 100 GB. El software muestra una estimación del tamaño total antes de iniciar el batch. Verificar que haya espacio suficiente antes de continuar.

---

## 5.8 Limitaciones del Feed Múltiple

FeedDownloader Pro analiza un feed a la vez. No dispone de un gestor de feeds permanentes con actualización automática: el software está optimizado para la descarga batch, no para la monitorización continua de múltiples feeds.

Para gestionar varios feeds en secuencia, la estrategia recomendada es:
1.  Usar la función OPML para mantener la lista de feeds en un archivo centralizado.
2.  Analizar y descargar un podcast a la vez, procediendo de forma sistemática.
3.  Usar el historial de feeds para recuperar rápidamente un podcast ya analizado.

---

*Véase el Capítulo 6 para una descripción detallada del motor de descarga.*
