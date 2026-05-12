# Capítulo 10: Configuración Avanzada

## 10.1 Descripción General del Panel de Configuración

El panel de configuración es accesible en cualquier momento mediante el icono de engranaje (⚙) en la esquina superior de la interfaz. Las opciones están organizadas en cinco pestañas temáticas: **General**, **Descarga**, **Metadatos**, **Archivo** y **Avanzado**. Todos los cambios se guardan automáticamente: no es necesario confirmarlos con un botón específico.

---

## 10.2 Descarga

Esta sección contiene los controles principales del motor de descarga. Los parámetros técnicos internos (timeout de conexión, número de reintentos, stall detection) están fijos en el motor y no requieren configuración manual.

### Descargas Paralelas

El número de descargas simultáneas. Seleccionable entre tres ajustes predefinidos: **1**, **3** y **5**. Para las directrices sobre cómo elegir el valor, véase el Capítulo 6.

**Valor predeterminado:** 3

### Límite de Velocidad

Permite limitar el ancho de banda agregado utilizado por todas las descargas activas, para evitar interferencias con otras actividades de red.

**Valores disponibles:** `0` = sin límite (predeterminado); cualquier valor positivo en KB/s. Ejemplo: `500` limita el consumo total a aproximadamente 4 Mbps.

---

## 10.3 General

### Idioma

FeedDownloader Pro está disponible en 8 idiomas: Italiano, English, Deutsch, Español, Français, Português, Русский, 中文.

El cambio de idioma es inmediato: la interfaz se actualiza sin necesidad de reiniciar el software. La aplicación utiliza exclusivamente el tema oscuro «Obsidian Command»: no hay un tema claro disponible ni un selector de densidad de lista.

### Actualización automática de feeds

Permite sincronizar automáticamente todos los feeds a intervalos regulares, sin intervención manual. Hay cuatro preajustes disponibles:

| Opción | Comportamiento |
|--------|----------------|
| **Desactivado** (predeterminado) | Sin sincronización automática. |
| **Cada 6 horas** | Sincronización completa cada 6 horas desde el arranque. |
| **Cada 12 horas** | Sincronización completa cada 12 horas desde el arranque. |
| **Cada 24 horas** | Sincronización completa cada 24 horas desde el arranque. |

El cambio es inmediato y no requiere reiniciar el software. Si durante la sincronización automática se encuentran nuevos episodios, se envía una notificación del sistema operativo. La sincronización automática no inicia descargas: solo señala la disponibilidad de nuevos contenidos. Para una descripción detallada del comportamiento, véase la sección 5.9.

*Nota:* La barra de filtros de la lista de episodios (búsqueda de texto, estado, fecha, duración) se describe en la sección 3.4, ya que forma parte de la lista de episodios y no de los ajustes.

---

## 10.4 Seguridad: El Sistema Anti-SSRF de 5 Niveles

Esta sección está documentada a título informativo: el sistema de seguridad opera de forma completamente automática y no requiere configuración por parte del usuario.

**¿Qué es un ataque SSRF?**
SSRF (Server-Side Request Forgery) es un tipo de ataque en el que una URL maliciosa, en lugar de apuntar a un recurso público, apunta a recursos internos de la red (como el panel de administración del router, un NAS o un servidor local). En el contexto de un descargador, un feed RSS construido de forma malintencionada podría incluir URL de audio que apunten a estos recursos internos.

**Los 5 niveles de validación:**

1.  **Validación del protocolo:** Solo se aceptan los protocolos `http://` y `https://`. Protocolos como `file://`, `ftp://`, `data:`, `javascript:` se rechazan de inmediato.

2.  **Validación sintáctica de la URL:** La URL se analiza para verificar la conformidad con el estándar RFC 3986.

3.  **Resolución DNS con inspección de la IP:** El dominio de la URL se resuelve en una dirección IP. Si la resolución falla, la URL se rechaza. Si tiene éxito, la dirección IP resultante se verifica en el siguiente nivel.

4.  **Bloqueo de direcciones IP privadas y reservadas:** Se bloquean todas las direcciones IP pertenecientes a rangos privados o reservados, incluidos:
    *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` (redes privadas RFC 1918)
    *   `127.0.0.0/8` (loopback)
    *   `169.254.0.0/16` (link-local)
    *   `::1/128` (loopback IPv6)
    *   `fc00::/7` (unique local IPv6)
    *   Cualquier dirección que apunte al host local.

5.  **Bloqueo de puertos no estándar:** Solo se aceptan los puertos 80 y 443. Las URL con puertos no estándar (p. ej., `:8080`, `:3000`, `:22`) se rechazan.

*Nota para entornos empresariales:* Si la red corporativa incluye servidores de podcast internos accesibles mediante direcciones IP privadas, el sistema anti-SSRF bloqueará estas URL. En ese caso, contactar con el soporte para una configuración personalizada que incluya rangos específicos de direcciones IP en la lista blanca interna.

---

## 10.5 Avanzado

### Actualizaciones

FeedDownloader Pro incluye un sistema de actualización automática integrado.

**Verificación automática al inicio:** En la versión instalada (paquete), el software comprueba automáticamente la disponibilidad de nuevas actualizaciones 3 segundos después del inicio, consultando el repositorio de GitHub. Si hay una nueva versión disponible, la descarga comienza en segundo plano sin requerir ninguna acción.

**Verificación manual:** El botón **"Buscar actualizaciones"** en la pestaña **Avanzado** fuerza una comprobación inmediata en cualquier momento.

Si hay una nueva versión disponible, el software la descarga en segundo plano y muestra el botón **"Instalar y reiniciar"**. La instalación nunca se inicia automáticamente: la decisión corresponde siempre al usuario.

**Estados mostrados durante el proceso:**
*   **Comprobando actualizaciones…** — el software está consultando el repositorio de GitHub.
*   **Estás actualizado** — la versión instalada es la más reciente.
*   **Nueva versión disponible (vX.Y.Z)** — descarga en curso en segundo plano.
*   **Actualización lista** — el paquete se ha descargado y está listo para instalarse.

### Restablecer Base de Datos

Elimina completamente la base de datos y comienza con un archivo vacío. **Esta operación es irreversible.** El software solicita una doble confirmación explícita antes de continuar. Los archivos de audio en el disco no se eliminan: únicamente se borra la memoria interna del software (historial de descargas, metadatos, estadísticas).

*Cuándo usarlo:* Exclusivamente cuando se desea empezar con un archivo completamente vacío, por ejemplo tras una migración a un nuevo sistema o para eliminar los datos de un ciclo de pruebas.

---

*Véase el Capítulo 11 para la resolución de los problemas más comunes.*
