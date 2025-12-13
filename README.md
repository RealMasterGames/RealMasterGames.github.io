# 🎮 RealMasterGames: Tu Catálogo de Juegos Portables

Bienvenido al repositorio de **RealMasterGames**, la infraestructura que soporta el catálogo web de videojuegos portables para PC.

Este proyecto tiene como objetivo principal proporcionar a los usuarios una biblioteca digital de juegos, con un enfoque en títulos que se pueden descargar directamente y ejecutar sin procesos de instalación complicados (formato **Portable**).

## 🚀 Accede al Catálogo Web

Para ver la lista completa de juegos, sus requisitos, filtros y enlaces de descarga disponibles, visita la página principal del proyecto:

🔗 **[https://realmastergames.github.io/](https://realmastergames.github.io/)**

## 🎯 Misión

Facilitar el acceso a una colección curada de videojuegos para PC, garantizando que los archivos sean de fácil obtención a través de enlaces directos de plataformas como MediaFire y Google Drive.

## 🤝 Colaboración y Roles

Este proyecto es mantenido por un equipo con roles específicos:

| Rol | Responsable | Tarea Principal |
| :--- | :--- | :--- |
| **🕹️ Gestor de Contenido principal (Uploader)** | **Raxxor** | Se encarga de **conseguir, empaquetar, subir** los archivos de los juegos (en formato ZIP/RAR portable) a plataformas de alojamiento y proporcionar los enlaces de descarga. |
| **💻 Administrador de la Web** | **あLG** | Mantiene el código base (HTML, CSS, JavaScript), gestiona los archivos del repositorio, actualiza la lista de juegos en `game-data.js` y asegura el correcto funcionamiento de la interfaz. |

## 📁 Estructura del Repositorio

Los archivos clave que dan forma al catálogo son:

| Archivo | Descripción |
| :--- | :--- |
| `index.html` | La página principal que muestra la cuadrícula de juegos y los filtros. |
| `Data/game-data.js` | Contiene la **base de datos (JSON)** de todos los juegos listados, incluyendo nombres, requisitos y enlaces de descarga. **Este es el archivo que se actualiza con los juegos de Raxxor.** |
| `Data/filters.js` | Contiene la **lógica JavaScript** que lee `game-data.js`, renderiza las tarjetas, aplica los filtros dinámicos (género, tamaño) y la funcionalidad de búsqueda. |
| `game-detail.html` | La plantilla que se usa para mostrar la información detallada (sin usar una base de datos backend). |
| `image/` | Carpeta que almacena todas las portadas y miniaturas utilizadas en el catálogo. |

---

## 🛠️ ¿Problemas o Sugerencias?

Agradecemos cualquier informe de errores o sugerencia para mejorar la experiencia web:

* **Enlaces Rotos:** Si encuentras un enlace de descarga caído, por favor, crea un **Issue** en este repositorio.
* **Errores en la Web:** Para fallos en la interfaz o la funcionalidad (filtros, tarjetas), crea un **Issue** para que el Administrador de la Web pueda revisarlo.

¡Gracias por visitar RealMasterGames!
