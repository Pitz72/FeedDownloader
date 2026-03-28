# Capítulo 7: NAS, Discos de Red y Rutas SMB

## 7.1 Por Qué los Discos de Red Requieren un Enfoque Específico

La mayoría de las aplicaciones de descarga de escritorio gestiona correctamente las rutas locales (`C:\`, `D:\`) y presenta comportamientos impredecibles cuando el destino es un NAS, un servidor Windows compartido o una unidad SMB. La razón es técnica: los discos de red son intrínsecamente menos fiables que los discos locales. El NAS puede estar apagado, la red local puede sufrir picos de latencia, las credenciales SMB pueden caducar. Cualquier operación sobre una ruta de red que no responde puede bloquear el thread principal de la aplicación durante decenas de segundos, haciendo que la interfaz no responda.

FeedDownloader Pro gestiona correctamente estos escenarios. Para los usuarios que archivan en NAS, este capítulo es esencial.

---

## 7.2 Cómo Funciona la Validación de Ruta de Red

Cada vez que se configura una ruta de destino que comienza por `\\` (ruta UNC, típica de SMB) o corresponde a una unidad de red asignada (p. ej., `Z:\`), FeedDownloader Pro activa automáticamente el **módulo de validación de ruta de red**.

Este módulo ejecuta tres operaciones en un **thread separado**, sin involucrar nunca el thread de la interfaz:

1.  **Test de accesibilidad:** Intenta acceder a la raíz de la ruta de red. Si el NAS no está encendido o la red no está disponible, esta operación falla.
2.  **Test de acceso de lectura:** Verifica que la carpeta de destino exista y sea legible.
3.  **Test de acceso de escritura:** Crea y luego elimina un archivo temporal (`_fdp_write_test_[timestamp].tmp`) en la carpeta de destino para verificar los permisos de escritura.

Toda la secuencia tiene un **timeout de 8 segundos**. Si en este intervalo no se recibe respuesta, el software considera la ruta no disponible y muestra un aviso, sin bloquear la interfaz.

*Motivación del timeout:* La mayoría de los NAS de consumo (Synology, QNAP, WD MyCloud) tarda 3–6 segundos en salir del modo de suspensión. 8 segundos es un intervalo suficiente para esperar esta recuperación, permaneciendo lo bastante breve como para no resultar una espera perceptible para el usuario.

---

## 7.3 Configurar una Ruta NAS

**Método 1 — Ruta UNC directa:**
Introducir la ruta en el formato `\\NombreServidor\NombreRecurso\Carpeta`:

```
\\MYNAS\Podcast\Archivo
\\192.168.1.100\media\podcast
\\NAS-SYNOLOGY\video\audio_archive
```

La ruta puede introducirse directamente en el campo de texto del destino, o bien mediante la ventana de selección de carpeta, que en Windows admite la navegación por rutas de red.

**Método 2 — Unidad de red asignada:**
Si el NAS ya está asignado como unidad de red en Windows (p. ej., `Z:` → `\\MYNAS\Podcast`), es posible seleccionar `Z:\Archivo` como carpeta de destino. FeedDownloader Pro reconoce automáticamente que se trata de una ruta de red y activa la validación.

**Método 3 — macOS y Linux (punto de montaje):**
En macOS y Linux, las rutas de red SMB se presentan como carpetas normales en el sistema de archivos tras el montaje (p. ej., `/Volumes/MYNAS/Podcast` en macOS, `/mnt/nas/podcast` en Linux). Estas rutas pueden usarse directamente como carpeta de destino.

---

## 7.4 Credenciales SMB y Autenticación

Las credenciales de acceso al NAS deben configurarse a nivel del sistema operativo, no dentro de FeedDownloader Pro.

**En Windows:**
1.  Abrir el **Explorador de archivos** y navegar hasta la ruta del NAS (`\\MYNAS\`).
2.  Introducir las credenciales cuando se soliciten y marcar **"Recordar credenciales"**.
3.  Las credenciales se guardan en el **Administrador de credenciales de Windows** (`Panel de control → Administrador de credenciales → Credenciales de Windows`).
4.  FeedDownloader Pro, como cualquier otra aplicación, accederá al NAS sin necesidad de credenciales adicionales.

**En macOS:**
Las credenciales SMB se solicitan al montar el recurso compartido (desde el Finder: **Ir → Conectarse al servidor** → `smb://192.168.1.100/NombreRecurso`). macOS las guarda en el Llavero.

**En Linux:**
Montar el recurso compartido con las credenciales en el archivo `fstab` o mediante una herramienta gráfica como GNOME Files. Como alternativa, usar `smbclient` o `mount -t cifs` desde la terminal.

---

## 7.5 Diagnóstico de Problemas con Rutas de Red

En caso de aviso «Ruta de red no accesible», verificar los siguientes puntos en el orden indicado.

**1. ¿El NAS está encendido y funcionando?**
Verificar los indicadores del dispositivo. Muchos NAS de consumo entran en modo de suspensión tras un período de inactividad. Antes de iniciar la descarga, abrir el panel de administración del NAS desde el navegador para verificar su disponibilidad.

**2. ¿El NAS es accesible desde la red?**
Desde el Símbolo del sistema (Windows) o el Terminal (macOS/Linux):
```
ping 192.168.1.100
```
Sustituir con la dirección IP del NAS. Si el comando recibe respuesta, la conectividad de red básica está funcionando.

**3. ¿El recurso compartido SMB es accesible?**
Intentar abrir la ruta `\\192.168.1.100\NombreRecurso` directamente desde el Explorador de archivos de Windows. Si la operación falla, el problema reside en la configuración SMB del NAS, no en FeedDownloader Pro.

**4. ¿Los permisos de escritura son correctos?**
Crear manualmente un archivo en la carpeta de destino mediante el gestor de archivos. Si la operación no está permitida, el usuario con el que se accede al NAS no tiene permisos de escritura en ese recurso compartido. Configurar los permisos desde el panel de administración del NAS.

**5. ¿El firewall bloquea las conexiones SMB?**
El protocolo SMB utiliza el puerto 445 (y en algunos casos el puerto 139). Verificar que el firewall del sistema o de terceros no bloquee estos puertos para las conexiones en la red local.

---

## 7.6 Rendimiento Óptimo en NAS

Las descargas en NAS presentan una complejidad adicional respecto a las de disco local: los archivos se escriben a través de la red y la velocidad depende tanto del ancho de banda de la LAN como de la capacidad de escritura del NAS.

**Indicaciones operativas:**

*   **Usar una conexión por cable (Ethernet):** El Wi-Fi introduce latencia e inestabilidad en las operaciones de escritura en red. Para archivos de gran tamaño, una conexión Gigabit Ethernet por cable ofrece un rendimiento significativamente mejor.
*   **Reducir los threads paralelos:** La escritura simultánea de muchos archivos en un NAS puede saturar su I/O. Con 2–3 threads paralelos se obtienen a menudo mejores resultados que con el número máximo disponible.
*   **Evitar solapamientos con las copias de seguridad del NAS:** Si el NAS realiza copias de seguridad automáticas, evitar iniciar descargas batch en las mismas franjas horarias, ya que la competencia por el I/O del disco ralentiza ambas operaciones.
*   **Usar una caché local:** Para archivos muy grandes, es posible descargar primero en un disco local rápido y mover los archivos al NAS al completarse la descarga.

---

*Véase el Capítulo 8 para la configuración de la plantilla de renombrado y las funcionalidades de metadatos.*
