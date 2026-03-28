# Capítulo 2: Instalación y Primer Inicio

## 2.1 Requisitos del Sistema

Runtime FeedDownloader Pro es una aplicación de escritorio basada en tecnología Electron. Es autónoma y no requiere la instalación de entornos de ejecución adicionales (Node.js, .NET, Java): todo lo necesario está incluido en el paquete de instalación.

**Requisitos mínimos:**

| Sistema Operativo | Versión Mínima | Arquitectura |
|-------------------|----------------|--------------|
| Windows | 10 (build 1903) o Windows 11 | 64-bit (x64) |
| macOS | 11.0 Big Sur | Intel x64 o Apple Silicon (M1/M2/M3) |
| Linux | Ubuntu 22.04 LTS, Debian 11, Fedora 36 o distribuciones equivalentes | 64-bit (x64) |

**Requisitos de hardware recomendados:**
*   **RAM:** 4 GB (8 GB recomendados para archivos de gran tamaño con varios threads activos)
*   **Espacio en disco:** 200 MB para la instalación del programa, más el espacio necesario para el archivo de audio
*   **Conexión:** Banda ancha (al menos 10 Mbps para utilizar las descargas paralelas de forma efectiva)

*Nota para usuarios de Linux:* El software se distribuye en formato `.AppImage`, autocontenido y utilizable en cualquier distribución moderna con bibliotecas glibc actualizadas, sin procedimiento de instalación tradicional.

---

## 2.2 Instalación en Windows

1.  Descargar el archivo de instalación `Runtime-FeedDownloader-Pro-Setup-0.7.5.exe` desde la página de releases oficial.
2.  Hacer doble clic en el archivo descargado para iniciar el programa de instalación.
3.  Si Windows muestra el aviso **"Windows protegió su equipo"** (SmartScreen), hacer clic en **"Más información"** y luego en **"Ejecutar de todas formas"**. Este aviso es estándar para software distribuido fuera de Microsoft Store que aún no ha alcanzado un umbral suficiente de adopción para el sistema de reputación de Windows.
4.  Seguir las instrucciones en pantalla: aceptar el contrato de licencia, elegir la carpeta de instalación y hacer clic en **"Instalar"**.
5.  Al finalizar, estarán disponibles un acceso directo en el **Escritorio** y una entrada en el menú **Inicio**.

**Rutas de instalación y datos:**
El programa se instala en `C:\Program Files\Runtime FeedDownloader Pro\`. La base de datos y los archivos de configuración se guardan por separado en `C:\Users\[TuNombre]\AppData\Roaming\FeedDownloaderPro\`. Esta separación garantiza que la desinstalación del programa no afecte a los datos del archivo.

---

## 2.3 Instalación en macOS

1.  Descargar el archivo `Runtime-FeedDownloader-Pro-0.7.5.dmg`.
2.  Abrir el archivo `.dmg` con un doble clic. Se mostrará una ventana con el icono de la aplicación.
3.  Arrastrar el icono de **FeedDownloader Pro** a la carpeta **Aplicaciones**, tal como indica la flecha en la ventana del `.dmg`.
4.  **Primer inicio en macOS:** Como el software no se distribuye a través de Mac App Store, macOS mostrará un aviso de seguridad la primera vez que se abra. Para continuar:
    *   Ir a **Configuración del Sistema → Privacidad y Seguridad**.
    *   En la sección «Seguridad» aparecerá el mensaje *«FeedDownloader Pro fue bloqueado...»*.
    *   Hacer clic en **"Abrir de todas formas"** y luego en **"Abrir"** en la ventana de confirmación.
    *   En los inicios posteriores, el software se abrirá normalmente con un doble clic.

*Nota para usuarios de Apple Silicon (M1/M2/M3):* Hay disponible una versión nativa ARM. Para obtener un rendimiento óptimo, descargar el archivo `.dmg` con el sufijo `-arm64`. La versión x64 se puede usar mediante Rosetta 2, pero la versión ARM es más eficiente.

---

## 2.4 Instalación en Linux

1.  Descargar el archivo `Runtime-FeedDownloader-Pro-0.7.5.AppImage`.
2.  Hacer el archivo ejecutable. Las opciones disponibles son:
    *   **Mediante interfaz gráfica:** clic derecho en el archivo → Propiedades → pestaña Permisos → marcar «Permitir ejecutar el archivo como programa».
    *   **Mediante terminal:** `chmod +x Runtime-FeedDownloader-Pro-0.7.5.AppImage`
3.  Iniciar el archivo con un doble clic o desde la terminal: `./Runtime-FeedDownloader-Pro-0.7.5.AppImage`

**Integración con el escritorio (opcional):**
Para añadir FeedDownloader Pro al lanzador y al menú de aplicaciones, se puede usar **AppImageLauncher** (disponible en los repositorios de la mayoría de las distribuciones), que integra automáticamente los archivos AppImage en el sistema.

*Nota para entornos sandbox:* En distribuciones con **Flatpak** o entornos con restricciones de acceso al sistema de archivos, el software podría no alcanzar las rutas de red SMB. En ese caso, verificar que el sistema de archivos de red esté montado y sea accesible desde el gestor de archivos antes de iniciar el programa.

---

## 2.5 El Primer Inicio

Al abrir el software por primera vez, está listo para usar de inmediato. No se requiere ninguna configuración inicial, ni la creación de una cuenta ni la introducción de una licencia. La interfaz se presenta con la barra de introducción de URL en el centro y la lista de episodios vacía.

**Archivos creados en el primer inicio:**
El programa genera automáticamente en la carpeta de datos de usuario los siguientes archivos:
*   `feeddownloader.db` — La base de datos SQLite principal. Contiene todo el historial de descargas, los metadatos de los episodios y el estado del archivo. **Este archivo no debe eliminarse.**
*   `settings.json` — Las preferencias del usuario (idioma, número de threads, carpeta de destino predeterminada, etc.).
*   `logs/` — La carpeta de archivos de log, útil para el diagnóstico en caso de problemas.

---

## 2.6 Actualizaciones

Cuando hay disponible una nueva versión, el software muestra una notificación en la barra inferior de la interfaz. La instalación de la actualización siempre requiere el consentimiento explícito del usuario.

Antes de actualizar, el software realiza automáticamente una copia de seguridad de la base de datos. En cualquier caso, los datos del archivo no se modifican durante una actualización: únicamente se reemplazan los archivos del programa.

*Nota:* Antes de actualizar a una versión major (por ejemplo, de 0.7.x a 0.8.x), se recomienda realizar una copia manual del archivo `feeddownloader.db` en una ubicación segura.

---

*Véase el Capítulo 3 para una descripción detallada de los elementos de la interfaz.*
