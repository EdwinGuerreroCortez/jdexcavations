# JD Excavation

Proyecto frontend con React y Vite para el sitio corporativo de JD Excavation.

## Arquitectura

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` y `src/main.jsx` | Puntos de entrada de Vite y React. |
| `src/App.jsx` | Componente raíz de la aplicación. |
| `src/index.css` y `src/App.css` | Estilos globales y estilos del componente raíz, respectivamente. |
| `src/assets/{images,icons,logos}/` | Recursos que se importan desde el código y que procesa Vite. |
| `src/components/common/` | Componentes compartidos entre distintas páginas. |
| `src/components/layout/` | Componentes de estructura, como el encabezado y el pie de página. |
| `src/components/ui/` | Controles reutilizables, como botones y campos de formulario. |
| `src/pages/` | Composición de páginas a partir de secciones y componentes. |
| `src/sections/{home,about,services,equipment,projects,contact}/` | Bloques de la Home para portada, empresa, servicios, maquinaria, proyectos y contacto. |
| `src/data/` | Datos y contenido estructurado del sitio. |
| `src/hooks/` | Hooks de React compartidos. |
| `src/utils/` | Funciones auxiliares. |
| `src/styles/` | Hojas de estilo de navegación, pie de página y secciones de la Home. |
| `public/{images,icons,fonts}/` | Recursos estáticos accesibles por URL directa. |

Las carpetas vacías contienen un archivo `.gitkeep` para conservar su ubicación al versionar el proyecto.

## Home provisional

La portada muestra la imagen panorámica proporcionada por JD Excavation mediante la URL de Dropbox configurada en `src/sections/home/Hero.jsx`. En pantallas pequeñas, la imagen se sitúa arriba y se funde con el fondo oscuro detrás del texto. Las animaciones de entrada respetan `prefers-reduced-motion`.

Las secciones About Us, Equipment y Projects tienen espacios provisionales para fotografías de JD Excavation.

El encabezado y el pie usan una copia JPEG ligera del logotipo oficial. El PNG original se conserva en `src/assets/logos/` y sirve de respaldo en el componente `Brand`.

Los botones de cotización llevan a Contact. Desde allí se puede llamar al número publicado o abrir el sitio de JD Tunneling.

## Desarrollo

Con Node.js y npm disponibles, ejecuta los comandos desde la raíz del proyecto.

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm run build` | Genera la compilación de producción. |
| `npm run preview` | Sirve localmente la compilación de producción. |
