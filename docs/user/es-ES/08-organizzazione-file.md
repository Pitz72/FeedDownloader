# Capítulo 8: Organización de Archivos, Plantillas y Metadatos

## 8.1 El Problema de los Nombres No Significativos

Cuando un archivo de audio se publica en un servidor de podcast, su nombre original suele ser poco legible: `ep_2024_03_15_FINAL_v2_mixdown.mp3`, `podcast-episode-187-compressed.m4a`, o incluso simplemente `abc123def456.mp3` son ejemplos comunes. Estos nombres tienen sentido para los sistemas del productor, pero hacen que un archivo sea difícil de consultar.

FeedDownloader Pro resuelve este problema mediante el **sistema de plantillas de renombrado**: un mecanismo que permite definir un formato de nombre personalizado para todos los archivos descargados, utilizando información extraída directamente del feed RSS.

---

## 8.2 Cómo Funciona la Plantilla

Una plantilla de renombrado es una cadena de texto que puede contener texto fijo y **tokens** — variables encerradas entre llaves simples (`{ }`). Al completarse cada descarga, el software sustituye cada token por el valor correspondiente del episodio.

**Ejemplo:**

Plantilla configurada: `{date} - {podcast} - {title}`

Resultado: `2024-03-15 - El Podcast de Mario - Episodio 187: La inteligencia artificial bien explicada.mp3`

La extensión del archivo (`.mp3`, `.m4a`, etc.) se añade automáticamente según el formato del archivo original: no forma parte de la plantilla.

---

## 8.3 Los Tokens Disponibles

| Token | Descripción | Ejemplo |
|-------|-------------|---------|
| `{title}` | Título del episodio del feed RSS | `Episodio 187: La IA bien explicada` |
| `{podcast}` | Nombre del podcast (título del canal RSS) | `El Podcast de Mario` |
| `{date}` | Fecha de publicación en formato `YYYY-MM-DD` | `2024-03-15` |
| `{year}` | Año de publicación | `2024` |
| `{month}` | Mes de publicación (2 dígitos) | `03` |
| `{day}` | Día de publicación (2 dígitos) | `15` |

*Nota:* Si en la plantilla se introduce un texto entre llaves que no corresponde a ninguno de los tokens enumerados (por ejemplo `{episode}`), el texto se deja sin cambios en el nombre del archivo resultante.

---

## 8.4 Plantillas Recomendadas

**Plantilla predeterminada:**
```
{title}
```
La plantilla predeterminada usa únicamente el título del episodio. Es adecuada para catálogos con títulos descriptivos.

**Para uso general (recomendado):**
```
{date} - {title}
```
Resultado: `2024-03-15 - Episodio 187: La IA bien explicada.mp3`

Este formato es recomendado porque la ordenación alfabética de los archivos coincide con la ordenación cronológica.

**Para archivos de múltiples podcasts (carpeta compartida):**
```
{podcast} - {date} - {title}
```
Resultado: `El Podcast de Mario - 2024-03-15 - Episodio 187.mp3`

Útil cuando todos los podcasts se guardan en la misma carpeta de destino.

**Para organización en subcarpetas por año y mes:**
```
{year}/{month}/{date} - {title}
```
Crea una estructura de subcarpetas automática (véase la sección 8.7).

---

## 8.5 Normalización Automática de Nombres

Algunos caracteres no están permitidos en los nombres de archivo en los principales sistemas operativos: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|` en Windows.

FeedDownloader Pro aplica automáticamente una **normalización** al nombre resultante de la plantilla:

*   Los caracteres no permitidos se sustituyen por un guion (`-`) o se eliminan.
*   Los espacios dobles se reducen a un espacio simple.
*   Los guiones o espacios al inicio y al final se eliminan.
*   El nombre se trunca a 240 caracteres si supera el límite del sistema de archivos.

*Nota sobre los títulos largos:* Algunos podcasts utilizan títulos muy descriptivos (más de 150 caracteres). El uso del token `{title}` en la plantilla puede producir nombres de archivo muy largos. En estos casos, combinar `{date}` como elemento cronológico principal puede limitar la longitud total del nombre.

---

## 8.6 Configurar la Plantilla

La plantilla de renombrado se configura en **Configuración → Metadatos**.

El campo de texto acepta cualquier combinación de texto y tokens. Debajo del campo hay una vista previa en tiempo real que muestra el resultado de la plantilla aplicada a un episodio de ejemplo, para verificar el formato antes de guardar.

La plantilla predeterminada es `{title}`.

---

## 8.7 Organización en Subcarpetas

En la plantilla es posible usar el carácter `/` para crear una estructura de **subcarpetas** automática dentro de la carpeta de destino.

**Ejemplo — organización por año y mes:**
```
{year}/{month}/{date} - {title}
```

Con una carpeta de destino `D:\Archivo Podcast\El Podcast de Mario\`, el resultado será:
```
D:\Archivo Podcast\El Podcast de Mario\
    ├── 2024\
    │   ├── 01\
    │   │   ├── 2024-01-08 - Primer Episodio del Año.mp3
    │   │   └── 2024-01-22 - Segundo Episodio.mp3
    │   └── 03\
    │       └── 2024-03-15 - Episodio 187.mp3
    └── 2023\
        └── 12\
            └── 2023-12-20 - Último Episodio de 2023.mp3
```

Las subcarpetas se crean automáticamente si no existen.

*Atención:* El carácter `\` (barra invertida) no está admitido como separador de ruta en la plantilla. Usar siempre `/` (barra inclinada), que el software traduce correctamente para el sistema operativo en uso.

---

## 8.8 Archivo Sidecar JSON

En la pestaña **Configuración → Metadatos** está disponible el interruptor **"Archivo sidecar .json"**.

Cuando está activado, por cada archivo de audio descargado se crea un archivo `.json` con el mismo nombre en la misma carpeta. El archivo contiene los metadatos del episodio en formato estructurado:

```json
{
  "title": "Episodio 187: La IA bien explicada",
  "podcast": "El Podcast de Mario",
  "date": "2024-03-15",
  "sourceUrl": "https://media.ejemplo.es/ep187.mp3"
}
```

**Casos de uso:**
*   Integración con scripts de automatización o sistemas que leen los metadatos directamente desde el sistema de archivos sin consultar la base de datos.
*   Conservación de los metadatos de forma independiente de la base de datos, útil en caso de migración o reconstrucción del archivo.

Esta opción está desactivada de forma predeterminada.

---

## 8.9 Etiquetado ID3

En la pestaña **Configuración → Metadatos** está disponible el interruptor **"Etiquetado ID3"**.

Cuando está activado, al completarse cada descarga el software escribe los metadatos directamente dentro del archivo `.mp3`, en las etiquetas ID3 estándar:

*   **Título:** El título del episodio
*   **Artista:** El nombre del podcast
*   **Año:** El año de publicación
*   **Portada:** La imagen del podcast (si está disponible en el feed RSS)

Las etiquetas ID3 son reconocidas por los principales reproductores de audio (Windows Media Player, VLC, iTunes, Foobar2000) y permiten mostrar la información del episodio con independencia del nombre del archivo.

*Nota:* El etiquetado ID3 se aplica exclusivamente a los archivos `.mp3`. Los archivos en otros formatos (`.m4a`, `.ogg`, `.opus`) no se modifican, aunque esta opción esté activa.

Esta opción está desactivada de forma predeterminada.

---

*Véase el Capítulo 9 para la verificación de integridad y la gestión del archivo.*
