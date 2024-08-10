/*
https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/dist/sweetalert2.all.min.js
https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark/dark.css
*/

const ASCII_MAPS = {
  CODEPRETTIFY: `
      🔗 https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js
  `,
  ICONOS: `
      🔗 https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css
      🔗 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css
  `,
  REACT_MUI: `
      ➤🌐 https://unpkg.com
      │
      ├──🔗 react@latest/umd/react.production.min.js
      ├──🔗 react-dom@latest/umd/react-dom.production.min.js
      ├──🔗 @babel/standalone/babel.min.js
      └──🔗 @mui/material@latest/umd/material-ui.production.min.js
  `,
  YOUTUBELITE: `
      📦 https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js
  `,
  PORTAFOLIO: `
      ➤🌐 https://jeff-aporta.github.io/portafolio
      │   
      ├──📁 src
      │   ├──📄 JS2CSS.js
      │   └──📄 theme.jsx
      │
      🤖 REACT (JSX)
      │
      ├──🎨 index
      │
      ├──📁 componentes
      │   ├──📄 coleccion-aux
      │   ├──📄 objetos
      │   │   
      │   ├──📁 paginas
      │   │   │
      │   │   ├──📁 librerias
      │   │   │   └──🖼️ componentes
      │   │   │
      │   │   ├──📁 main
      │   │   │   ├──🖼️ componentes
      │   ╧   ╧   └──🖼️ envolventes
      │   
      ├──📁 src
      │   │
      │   ├──📁 css
      ╧   ╧   └──🎨 code-prettify
  `,
  REACT_DESIGN_SYSTEM: `
      ➤🌐 https://cdn.jsdelivr.net/gh/Jeff-Aporta/react-cdn-design-system@main
      │
      ├──📁 dependencias
      │   └──🎨 animate.min
      │
      🤖 REACT (JSX)
      │
      ├──📁 componente
      │   │
      │   ├──📁 MUICustom
      │   │   ├──📄 prettoSlider
      │   │   ├──📄 switchTheme
      │   │   └──📄 toolTipTheme
      │   │
      │   ├──📁 selects
      │   │   ├──🖼️ selector-tiempo
      │   │   └──🖼️ selectpicker
      │   │
      │   ├──📁 ventanas
      │   │   │
      │   │   ├──📁 flotante-tipo-windows
      │   │   │   ├──📄 1-main
      │   │   │   ├──📄 2-modelos
      │   │   │   ├──📄 2-globales
      │   │   │   ├──📄 2-css-root-control
      │   │   │   ├──🎨 index
      │   │   │   │
      │   │   │   ├──📁 componente
      │   │   │   │   ├──📄 3-crear
      │   │   │   │   ├──📄 3-marco
      │   │   ╧   ╧   └──📄 3-control
      │   │
      │   ├──📁 reproductor
      │   │   ├──📁 video
      ╧   ╧   ╧   └──📄 theme1
    `,
  CSSCMDS: `
      ➤🌐 https://jeff-aporta.github.io/CSScmds
      └──📄 index.js
  `,
};
