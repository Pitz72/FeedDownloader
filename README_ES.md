# Runtime FeedDownloader Pro

Versión 1.4.1

La forma más potente de archivar tus podcasts.

## Qué es

Runtime FeedDownloader Pro es una herramienta profesional diseñada para archivistas, editores y entusiastas que necesitan descargar catálogos completos de podcasts para su conservación offline.
A diferencia de los reproductores convencionales, este software está optimizado para la descarga masiva (Batch), la resiliencia de red y la organización estructurada en el sistema de archivos.

## Características Principales

### Gestión de feeds

* **Biblioteca de Feeds Permanente:** Gestiona varios podcasts a la vez con una barra lateral redimensionable, búsqueda y ordenación A–Z; los feeds se conservan entre sesiones.
* **Insignia «Por Descargar»:** Indicador numérico en cada feed que señala cuántos episodios aún no están en tu archivo.
* **Detección de Nuevos Episodios:** Basada en los GUID de los episodios, no en un simple recuento — las notificaciones siguen siendo fiables incluso con podcasts de «ventana deslizante» que eliminan episodios antiguos.
* **Feeds Paginados (RFC 5005):** Sigue automáticamente los enlaces a las páginas siguientes del feed, reconstruyendo el catálogo completo incluso cuando el proveedor (Apple Podcasts, Libsyn, Blubrry…) solo publica los episodios recientes en la primera página.
* **Sync All con progreso por feed:** Actualiza todos los feeds en paralelo; cada miniatura muestra su propio estado en tiempo real.
* **Actualización Automática de Feeds:** Temporizador en segundo plano (6/12/24 h) con notificación del sistema para los nuevos episodios.

### Descargas y cola

* **Descarga por Lotes:** Descarga cientos de episodios con un clic, con gestión inteligente de la cola y concurrencia configurable (1, 3 o 5 descargas paralelas).
* **Límite de Velocidad:** Ancho de banda máximo de descarga configurable en Ajustes (0 = ilimitado).
* **Panel de Descargas:** Panel lateral con cola, velocidad (KB/s), tiempo estimado y registro de errores para cada lote. Botón flotante para reabrirlo sin perder las descargas.
* **Velocidad y Tiempo Estimado:** Se muestran en línea para cada descarga activa en la fila del episodio.
* **Cancelación Individual:** Cancela una sola descarga de la cola sin detener las demás.
* **Volver a Descargar un Episodio:** Posibilidad de volver a descargar un episodio ya presente en el archivo.
* **Selección Múltiple:** Ctrl+clic / Mayús+clic para seleccionar rangos de episodios y descargarlos juntos.

### Interfaz y navegación

* **Diseño Moderno «Electric Azure on Deep Dark»:** Interfaz oscura completamente rediseñada, rápida y legible.
* **Paleta de Comandos (Ctrl+K):** Acceso rápido a todas las acciones principales y a los feeds guardados sin usar el ratón.
* **Panel de Detalle del Episodio:** Al hacer clic en un episodio se abre un panel con los metadatos completos, los datos de archivo y las notas del programa.
* **Ordenación de Episodios:** Ordena la lista por fecha, título o duración, además del orden original del feed.
* **Vista de Archivo:** Pestaña dedicada para consultar, buscar y ordenar todo el archivo de episodios descargados.
* **Exportación de Playlists M3U:** Genera playlists locales compatibles con cualquier reproductor de audio.
* **Onboarding Guiado:** Sugerencias en el primer arranque para empezar de inmediato.

### Resiliencia e integridad

* **Motor «Database-First»:** El sistema recuerda lo que has descargado independientemente de los archivos en disco (SQLite).
* **Descargas Resilientes:** Tiempo de espera de conexión (30 s) y detección de bloqueos (60 s), reintentos automáticos con backoff exponencial, archivos `.part` anticorrupción.
* **Integridad de Datos:** Cálculo automático SHA-256 y extracción de metadatos de audio (bitrate, frecuencia de muestreo) tras la descarga.
* **Health Check:** Restauración automática de los episodios ausentes en disco con resincronización de la base de datos.

### Organización y portabilidad

* **Extensión Real:** Detecta y guarda el formato real del archivo (`.m4a`, `.ogg`, `.opus`, `.flac`…) en lugar de forzar siempre `.mp3`.
* **Etiquetas ID3 con Carátula:** Escribe automáticamente las etiquetas ID3 en los archivos `.mp3`, dando prioridad a la carátula específica del episodio cuando está disponible.
* **Plantillas de Renombrado:** Tokens personalizables (`{{title}}`, `{{date}}`, `{{podcast}}`) para nombres de archivo organizados.
* **Portabilidad de Datos:** Importa y exporta tus feeds mediante el estándar OPML. Genera informes CSV detallados de tu archivo.
* **Migración del Archivo:** Traslada toda la biblioteca a una nueva ruta/disco con actualización automática de la base de datos.
* **Soporte NAS/SMB:** Validación nativa y tiempo de espera (8 s) para rutas de red, sin congelar la interfaz.

### Sistema y seguridad

* **Auto-Update con Notificación:** Actualizaciones automáticas mediante GitHub Releases, con notificación del sistema cuando hay una actualización disponible y cuando está lista para instalar.
* **Seguridad de URL:** Validación anti-SSRF a nivel de conexión — bloquea protocolos peligrosos, IP privadas, direcciones reservadas y redirecciones hostiles, para cada página del feed.
* **Smart Truncate:** Renombra automáticamente los archivos para evitar errores de longitud de ruta en Windows.
* **Rendimiento:** Lista virtualizada — gestiona feeds con miles de episodios sin ralentizaciones.
* **Ayuda Integrada:** Guía de usuario consultable directamente dentro de la aplicación.

## Certificación Multilingüe

El software es totalmente compatible con **8 idiomas**: Italiano (IT), English (EN), Français (FR), Deutsch (DE), Español (ES), Português (PT), Русский (RU), 中文 (ZH). La interfaz, las notificaciones del sistema y la documentación están disponibles en todos los idiomas.

## Instrucciones Rápidas

1. **Analizar:** Pega la URL del feed RSS en la barra principal y pulsa «Analizar». El feed se añade a la barra lateral para futuros accesos.
2. **Elegir Carpeta:** En Ajustes → Archivo, establece la carpeta donde guardar los archivos. La ruta siempre es visible en el pie de la barra lateral.
3. **Descargar:** Usa el botón «Descargar Todo» para el catálogo completo, o selecciona episodios con Ctrl+clic y usa «Descargar Seleccionados».
4. **Supervisar:** El Panel de Descargas se abre automáticamente con la cola, la velocidad y el tiempo estimado de cada archivo.
5. **Gestionar:** Usa Ctrl+K para la Paleta de Comandos, o los Ajustes (⚙) para concurrencia, límite de velocidad, plantillas, OPML y estadísticas del archivo.

## Requisitos del Sistema

El software es multiplataforma y funciona de forma nativa en:

* **Windows**: 10/11 (64 bits) — instalador NSIS (`.exe`)
* **Linux**: Distribuciones modernas (Ubuntu 20.04+, Debian 11+, Fedora 34+) — `.AppImage` o `.deb`
* **macOS**: 11.0 (Big Sur) o superior — compatible a nivel de código, pero los paquetes para macOS no se distribuyen actualmente
* Conexión a Internet activa

## Descarga

Los paquetes oficiales están disponibles en [GitHub Releases](https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/releases) y se generan mediante GitHub Actions.

| Plataforma | Formato | Notas |
|---|---|---|
| Windows 10/11 | `.exe` (instalador NSIS) | Software sin firmar — ver nota de SmartScreen |
| Linux | `.AppImage` / `.deb` | No se requiere firma |

**Windows — aviso de SmartScreen:** En el primer arranque, Windows Defender puede mostrar la pantalla «Windows protegió su PC — Editor desconocido». El software es seguro. Haz clic en **Más información** → **Ejecutar de todas formas**.

**macOS:** Los paquetes `.dmg` no se publican actualmente; es posible compilar la aplicación desde el código fuente.

*Desarrollado con tecnología Electron y React para garantizar rendimiento y estabilidad.*
