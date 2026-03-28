# Capítulo 11: Solución de Problemas

## 11.1 Cómo Usar Este Capítulo

Este capítulo reúne los problemas más frecuentes notificados por los usuarios, con las causas más probables y las soluciones paso a paso. Cada problema se describe tal como se manifiesta en la interfaz, no en términos técnicos internos.

Si el problema no aparece en esta lista, consultar los archivos de log en la carpeta `logs/` (véase el Capítulo 10) y contactar con el soporte adjuntando el log de la sesión en la que se produjo el problema.

---

## Problemas de Feed y Análisis

---

### Problema: «Error de conexión» o «Timeout» durante el análisis del feed

**Cómo se manifiesta:** Se hace clic en **"Analizar"** y tras unos segundos aparece un mensaje de error que indica un timeout o un fallo de conexión. La lista permanece vacía.

**Causas probables y soluciones:**

*   **El servidor del feed no está disponible.** Abrir la URL del feed en el navegador. Si el navegador devuelve un error (página no encontrada, «Este sitio no es accesible»), el problema afecta al servidor del podcast: no es posible intervenir salvo volver a intentarlo más tarde.
*   **La conexión a Internet no está disponible o es inestable.** Verificar que otros sitios web sean accesibles. Si la conexión es inestable, esperar a que se estabilice antes de volver a intentarlo.
*   **Un firewall o proxy corporativo bloquea la solicitud.** En entornos empresariales, el tráfico hacia ciertos hosts puede estar bloqueado. Probar desde la red doméstica para verificar si el problema es específico de la red corporativa.

---

### Problema: El feed se analiza pero la lista de episodios está vacía

**Cómo se manifiesta:** El análisis se completa sin errores, pero la lista de episodios no muestra ningún elemento (o muestra 0 episodios).

**Causas probables y soluciones:**

*   **El feed no contiene episodios.** Abrir la URL en el navegador y verificar que el documento XML contenga etiquetas `<item>` o `<entry>`. Si no están presentes, el podcast aún no ha publicado episodios.
*   **El feed utiliza un formato no estándar.** FeedDownloader Pro admite RSS 2.0 y Atom 1.0. Algunos feeds producidos por plataformas propietarias pueden tener una estructura no convencional. En este caso, el software muestra un aviso específico en el mensaje de análisis.
*   **Todos los episodios ya están en la base de datos.** Si el feed se ha analizado anteriormente, los episodios aparecen con estado **"Descargado"** (verde tenue). Desplazarse por la lista y verificar la presencia de este indicador de estado.

---

### Problema: El feed muestra solo los últimos N episodios y no todo el catálogo histórico

**Cómo se manifiesta:** Se analiza un podcast con cientos de episodios conocidos, pero la lista solo muestra 50 o 100.

**Causa:** Este límite lo impone el editor del podcast o su plataforma de hosting, no FeedDownloader Pro. Muchas plataformas limitan el feed RSS a los últimos 50–100 episodios para reducir la carga en sus servidores. El software descarga exactamente los datos que el feed pone a disposición.

**Posibles alternativas:**
*   Verificar si el podcast ofrece un «feed completo» como URL alternativa (algunas plataformas lo ponen a disposición).
*   Consultar el sitio web del podcast o la plataforma de distribución (Spotify, Apple Podcasts) para recuperar los enlaces de los episodios más antiguos.
*   Algunas plataformas aceptan parámetros en la URL para solicitar el feed completo (p. ej., `?limit=0` o `?paged=all`): consultar la documentación de la plataforma específica.

---

## Problemas de Descarga

---

### Problema: Muchos episodios presentan el estado «Error 404»

**Cómo se manifiesta:** Tras una descarga batch, numerosos episodios muestran el estado **"Error"** con el mensaje `404 Not Found`.

**Causa:** Los episodios siguen presentes en el feed RSS (en el documento XML), pero los archivos de audio a los que apuntan han sido eliminados del servidor. Esta situación es frecuente con podcasts abandonados o migrados a otras plataformas.

**Qué se puede hacer:**
*   No es posible descargar archivos que ya no existen en el servidor.
*   Si se trata de un podcast activo y los errores parecen excesivos, contactar con el editor del podcast: podría tratarse de una migración temporal o de un problema técnico solucionable.
*   Los episodios con error 404 se excluyen automáticamente de los batches posteriores. No es necesario eliminarlos de la lista.

---

### Problema: Las descargas se inician pero avanzan muy lentamente

**Cómo se manifiesta:** La barra de avance se mueve, pero la velocidad es muy baja (pocos KB/s) respecto al ancho de banda disponible.

**Causas probables y soluciones:**

*   **El servidor del podcast aplica limitaciones de ancho de banda.** Muchos servidores de hosting imponen throttling para contener los costes. Reducir los threads a 1 puede mejorar la situación con los servidores que penalizan las conexiones múltiples.
*   **La conexión Wi-Fi es inestable.** Para descargas batch intensivas, usar una conexión por cable (Ethernet).
*   **El disco de destino es lento.** La escritura en NAS con conexión Wi-Fi o en dispositivos USB 2.0 puede ser el cuello de botella. Considerar descargar primero en un disco local rápido.
*   **La conexión a Internet está efectivamente limitada.** Verificar la velocidad de descarga real con un test de velocidad. Si el resultado es inferior a lo esperado, el problema afecta a la conexión.

---

### Problema: Un episodio se queda bloqueado en un porcentaje alto y nunca se completa

**Cómo se manifiesta:** Una descarga individual muestra un porcentaje alto (90 %, 95 %, 99 %) que no llega al 100 % y no se actualiza.

**Causa:** El servidor ha enviado casi todo el archivo pero ha interrumpido la transferencia antes de completarla. La stall detection detectará esta condición en los 60 segundos siguientes al último dato recibido y reiniciará la descarga automáticamente.

**Si el problema persiste tras varios intentos:** El archivo en el servidor podría estar dañado o truncado. Tras el número máximo de intentos, el episodio se marcará como **"Error"** con un mensaje que indica una discrepancia entre el tamaño declarado y el recibido.

---

### Problema: El software ha descargado un archivo `.mp3` pero el reproductor de audio indica que está dañado

**Cómo se manifiesta:** La descarga aparece como completada (estado verde), pero al abrir el archivo con un reproductor de audio se devuelve un error o el archivo no se reproduce.

**Causa:** Esto no debería ocurrir gracias al mecanismo de archivos `.part` y a la verificación de tamaño. Si ocurre, el archivo original en el servidor podría estar ya dañado (problema del editor), o se ha producido un error de escritura en disco.

**Solución:**
1.  Hacer clic derecho en el episodio de la lista → **"Forzar nueva descarga"**.
2.  Si el archivo descargado de nuevo sigue estando dañado, el problema afecta al archivo de origen en el servidor del podcast. Verificarlo abriendo directamente la URL del archivo en el navegador.
3.  Ejecutar un Health Check (véase el Capítulo 9) para verificar si otros archivos del archivo presentan problemas.

---

## Problemas de NAS y Red

---

### Problema: «Ruta de red no accesible» aunque el NAS está encendido

**Cómo se manifiesta:** El software muestra el aviso de ruta no accesible, pero el NAS es accesible normalmente desde el gestor de archivos.

**Soluciones a verificar en orden:**

1.  **Verificar que la ruta sea exacta.** Una diferencia en mayúsculas/minúsculas (`\\MYNAS\podcast` vs `\\MYNAS\Podcast`) puede causar un error en algunos sistemas.
2.  **¿Las credenciales SMB están guardadas?** Abrir el Explorador de archivos e intentar acceder manualmente a `\\MYNAS\NombreRecurso`. Si se solicita la contraseña, las credenciales no están guardadas en el Administrador de credenciales de Windows. Introducirlas y marcar **"Recordar"**.
3.  **¿El firewall de Windows bloquea FeedDownloader Pro?** Ir a `Panel de control → Firewall de Windows Defender → Aplicaciones permitidas` y verificar que FeedDownloader Pro aparezca en la lista con acceso permitido.
4.  **¿El NAS admite SMBv2/3?** Algunos NAS antiguos solo admiten SMBv1, desactivado de forma predeterminada en Windows 11. Actualizar el firmware del NAS o habilitar SMBv1 desde el panel de administración del NAS.

---

### Problema: Las descargas en NAS se interrumpen después de varios minutos

**Cómo se manifiesta:** El batch se inicia normalmente, descarga algunos episodios, luego se detiene con errores de escritura o de ruta no accesible.

**Causa:** El NAS entra en modo de suspensión durante la descarga. Algunos NAS de consumo tienen una función de ahorro de energía que puede activarse incluso durante transferencias activas si el dispositivo está configurado para monitorizar solo el tráfico web, ignorando las conexiones SMB.

**Soluciones:**
*   Desactivar temporalmente el modo de suspensión desde el panel de administración del NAS durante las descargas batch.
*   Reducir el número de threads a 1: un flujo de escritura continuo previene la activación de la suspensión de forma más eficaz que ráfagas intensas con pausas intermedias.

---

## Problemas Generales

---

### Problema: La interfaz responde con retraso

**Cómo se manifiesta:** Los clics tardan 1–2 segundos en recibir respuesta, el desplazamiento por la lista es discontinuo, el programa parece lento.

**Causas probables:**

*   **Base de datos de gran tamaño.** Con decenas de miles de episodios en la base de datos, algunas operaciones pueden ralentizarse. Considerar el uso de **Restablecer base de datos** (**Configuración → Avanzado**) solo si el archivo contiene muchos episodios con error o datos que no se pretende recuperar.
*   **Número elevado de threads en hardware con poca RAM.** Con 5 threads activos en un sistema con menos de 4 GB de RAM, el proceso puede ser lento. Reducir los threads a 1 o 3.
*   **Antivirus que analiza los archivos `.part` en tiempo real.** Algunos programas de seguridad interceptan cada operación de escritura en disco, ralentizando las descargas. Añadir la carpeta de destino a las exclusiones del antivirus.

---

### Problema: El software no se inicia o se cierra inmediatamente al abrirse

**Cómo se manifiesta:** Se inicia el programa, el proceso aparece brevemente en el Administrador de tareas pero luego desaparece sin que se muestre la interfaz.

**Soluciones:**

1.  **Revisar los logs.** Acceder a la carpeta `%APPDATA%\FeedDownloaderPro\logs\` (Windows) o `~/.config/FeedDownloaderPro/logs/` (Linux). Abrir el archivo de log más reciente con un editor de texto: la última línea debería indicar la causa del problema.
2.  **Base de datos dañada.** Si el log indica un error SQLite al iniciarse, el archivo `feeddownloader.db` podría estar dañado. Reemplazarlo con una copia de seguridad (véase el Capítulo 9). Si no se dispone de copia de seguridad, renombrarlo como `feeddownloader.db.bak`: el software creará una nueva base de datos vacía en el próximo inicio (con pérdida del historial).
3.  **Reinstalar el software.** Desinstalar FeedDownloader Pro e instalar la versión más reciente. La base de datos y la configuración no se eliminan con la desinstalación.

---

### Problema: He perdido los datos de la base de datos — ¿es posible recuperarlos?

**Cómo se manifiesta:** La base de datos se ha eliminado accidentalmente, está dañada, o se ha realizado un restablecimiento sin una copia de seguridad previa.

**Posibilidades de recuperación:**

*   **Con una copia de seguridad disponible:** Copiar el archivo `feeddownloader.db` de respaldo en la carpeta de datos de usuario de la aplicación, con el programa cerrado (véase el Capítulo 2 para la ruta de la carpeta de datos de usuario).
*   **Sin copia de seguridad:** Los archivos de audio en el disco siguen presentes: solo se ha perdido la memoria del software. Es posible reconstruir parcialmente el archivo analizando de nuevo los feeds: los episodios cuyos archivos ya están presentes en el disco serán reconocidos por el sistema y no se volverán a descargar.
*   **Prevención:** Realizar periódicamente una copia manual del archivo `feeddownloader.db` en una ubicación segura, o exportar la lista de feeds en formato OPML (véase el Capítulo 5) como copia de seguridad de la configuración. Se recomienda realizar este backup antes de cualquier migración o actualización del software.

---

*Este es el último capítulo del Manual de Usuario Avanzado de Runtime FeedDownloader Pro.*

*Para asistencia no cubierta por este manual, consultar la página oficial de releases o contactar con el soporte técnico de Ecosystem Runtime | Digital Core.*

---

*Ecosystem Runtime | Digital Core — Herramientas construidas para durar.*
