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

Las siete posiciones de fotografía se configuran en `src/data/homeImages.js`. Reemplaza el valor de `src` de cada posición con la URL definitiva. Un valor `null` muestra un marcador provisional. Para `HERO_BACKGROUND`, sustituye también `mobileSrc` o quítalo para usar la misma imagen en todos los tamaños.

El hero y las tarjetas de servicios cargan sus fotos de Dropbox mediante enlaces compartidos con `raw=1`. Las animaciones de entrada respetan `prefers-reduced-motion`.

El encabezado y el pie usan el PNG oficial en `src/assets/logos/`, con el isotipo enmarcado junto al nombre de la empresa.

Los botones de cotización llevan a Contact. El botón «Request a quote» enlaza directamente al sitio de JD Tunneling.

## Galería de proyectos

Guarda las fotografías en `public/images/projects/` y agrega una entrada por foto en `src/data/projects.js`. Usa un título breve y un texto alternativo en inglés que describa lo que aparece en la imagen. El campo `caption` es opcional.

```js
{
  src: '/images/projects/nombre-del-archivo.webp',
  alt: 'Describe the visible work',
  title: 'Project or work title',
  caption: 'Optional details about the work',
}
```

La sección Our Work muestra dos proyectos destacados con sus imágenes configuradas en `src/data/homeImages.js`. Al registrar fotos en `src/data/projects.js`, aparece una galería adicional. Las fotos se pueden abrir a mayor tamaño y recorrer con los botones o las flechas del teclado. El botón «View More» aparece cuando hay más de tres fotos.

## Desarrollo

Con Node.js y npm disponibles, ejecuta los comandos desde la raíz del proyecto.

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm run build` | Genera la compilación de producción. |
| `npm run preview` | Sirve localmente la compilación de producción. |
