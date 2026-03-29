# Runtime FeedDownloader Pro
**La forma más potente de archivar tus podcasts.**

## Qué es
Runtime FeedDownloader Pro es una herramienta profesional diseñada para archivistas, editores y entusiastas que necesitan descargar catálogos completos de podcasts para su conservación offline.
A diferencia de los reproductores estándar, este software está optimizado para la descarga masiva (Batch), la resiliencia de la red y la organización del sistema de archivos.

## Características Principales
- **Motor "Database-First":** El sistema recuerda lo que has descargado independientemente de los archivos en el disco.
- **Descarga por Lotes:** Descarga cientos de episodios con un clic, con gestión inteligente de la cola.
- **Portabilidad de Datos:** Importa y exporta tus feeds mediante el estándar OPML. Genera informes CSV detallados de tu archivo.
- **Seguridad Avanzada:** Sistema anticorrupción para discos llenos, modo offline inteligente y validación de feeds de entrada.
- **Ayuda Integrada:** Guía de usuario completa accesible directamente dentro de la aplicación.
- **Smart Truncate:** Renombra automáticamente los archivos para evitar errores de longitud de ruta en Windows.
- **Resiliencia:** Reintenta automáticamente las descargas si la conexión se cae.
- **Rendimiento:** Maneja feeds con miles de episodios sin ralentizaciones.

## Instrucciones Rápidas
1.  **Analizar:** Pega la URL del feed RSS en la barra principal y pulsa "Analizar".
2.  **Elegir Carpeta:** Haz clic en el icono de la carpeta para decidir dónde guardar el archivo.
3.  **Descargar:** Usa el botón "Descargar Todo" para el archivo completo o descarga episodios individuales manualmente.
4.  **Gestionar:** Usa la Configuración (icono de engranaje) para gestionar el idioma o restablecer la base de datos.

## Requisitos del Sistema
El software es multiplataforma y se ejecuta de forma nativa en:
- **Windows**: 10/11 (64 bits)
- **macOS**: 11.0 (Big Sur) o superior (Intel y Apple Silicon)
- **Linux**: Distribuciones modernas (Ubuntu, Debian, Fedora) mediante AppImage o .deb
- Conexión a Internet activa

## Descarga

Los paquetes oficiales para todas las plataformas están disponibles en [GitHub Releases](https://github.com/Pitz72/FeedDownloader/releases) y se generan automáticamente mediante GitHub Actions.

| Plataforma | Formato | Notas |
|---|---|---|
| Windows 10/11 | `.exe` (instalador NSIS) | Sin firmar — ver nota SmartScreen |
| macOS 11+ | `.dmg` / `.zip` | Sin firmar — ver nota Gatekeeper |
| Linux | `.AppImage` / `.deb` | No se requiere firma |

**Windows — advertencia SmartScreen:** En el primer inicio, Windows Defender puede mostrar la pantalla "Windows protegió tu PC — Editor desconocido". El software es seguro. Haz clic en **Más información** → **Ejecutar de todas formas**.

**macOS — advertencia Gatekeeper:** El paquete no está firmado con un certificado de Apple Developer. En el primer inicio, macOS puede bloquearlo. Para abrirlo: haz clic derecho en la app → **Abrir**, o ve a **Configuración del Sistema → Privacidad y seguridad → Abrir igualmente**.

*Desarrollado con tecnología Electron & React para garantizar rendimiento y estabilidad.*
