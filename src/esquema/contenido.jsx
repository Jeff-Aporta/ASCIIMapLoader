const _ASCIIMapLoader_ = (() => {

    const tab = (
        <b>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </b>
    );

    return new GenerarContenidoLibreria({
        nombre: 'ASCII Map Loader JS',
        slogan: "Carga dependencias JS, JSX o CSS con dibujos ASCII",
        img: "src/img/logo.jpeg",

        github: "https://github.com/Jeff-Aporta/ASCIIMapLoader",

        resumen: {
            desc: `
                *ASCII Map Loader* es una herramienta que permite cargar dependencias de forma dinámica y gráfica en un HTML.
            `,
            descImg: [
                "Dibujar las dependencias en forma de árbol, donde cada rama es una dependencia y cada hoja es un archivo.",
                "Soportar funciones primitivas y decoradores de control.",
                "Cargar archivos de JavaScript, React (JSX) y CSS."
            ]
        },

        secciones: [
            {
                nombre: "Presentación",
                contenido: (thisObj) => {
                    return (
                        <FormatoDoc>
                            *ASCII Map Loader.* Esta librería permite cargar dependencias de JavaScript, JSX o CSS de forma dinámica y
                            gráfica utilizando dibujos ASCII
                            <div
                                style={{
                                    maxWidth: "500px",
                                    maxHeight: "400px",
                                    margin: "15px auto",
                                }}
                            >
                                <lite-youtube
                                    videoid="O8n0Gc5xYxw"
                                />
                            </div>
                            <h2>
                                Beneficios
                            </h2>
                            <ul>
                                <LIDocTitulo>
                                    Automatización Eficiente: Convierte mapas ASCII en dependencias de manera automática.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Generación Dinámica: enlaces CSS, JS y JSX en tu documento HTML sin esfuerzo.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Optimización del Tiempo: Ahorra tiempo al evitar la inclusión larga de recursos.
                                </LIDocTitulo>
                            </ul>
                            <h2>
                                Características
                            </h2>
                            <ul>
                                <LIDocTitulo>
                                    Recorrido Recursivo: Itera sobre cada nodo del árbol, gestionando carpetas y archivos de manera eficiente.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Generación de Scripts y Links: Produce cadenas HTML adecuadas para incluir archivos en el documento.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Deducción de Extensiones: Identifica y ajusta automáticamente las extensiones de los archivos.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Decoradores con Emojis: Ayuda a visualizar la estructura del árbol con emojis y caracteres especiales.
                                </LIDocTitulo>
                            </ul>
                            <h2>
                                ¿Por Qué Usar ASCII Map Loader?
                            </h2>
                            <ul>
                                <LIDocTitulo>
                                    Facilidad de Uso: Simplifica la inclusión de recursos en tu página web.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Flexibilidad: Adapta y refina nombres de archivos y carpetas para una mejor organización.
                                </LIDocTitulo>
                                <LIDocTitulo>
                                    Eficiencia: Elimina nodos innecesarios y optimiza la estructura del árbol.
                                </LIDocTitulo>
                            </ul>
                            <br />
                            <p>
                                ¡Transforma tu flujo de trabajo y lleva tu desarrollo web al siguiente nivel con ASCII Map Loader! 🚀
                            </p>
                        </FormatoDoc>
                    );
                }
            },
            {
                nombre: "Usar con CDN",
                contenido: (thisObj) => {
                    return <FormatoDoc>
                        <p>
                            Para usar <b>ASCII Map Loader</b> en un proyecto web, se debe agregar el siguiente script.
                            <br /><br />
                            Se puede usar el siguiente enlace para cargar el script.
                        </p>
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                        <p>
                            También pueden usar un archivo llamado <Resaltar>mapeos-personales.js</Resaltar> que contiene mapeos personales de
                            ASCII que uso frecuentemente en mis proyectos.
                            <br /><br />
                            Al final de este documento se encuentra un ejemplo de uso de este archivo.
                        </p>
                        <Code nocode className="link">
                            {thisObj.githubPage}/mapeos-personales.js
                        </Code>
                        <h1>
                            Ejemplo
                        </h1>
                        <h2>
                            Agregando dependencias de forma dinámica
                        </h2>
                        En este ejemplo se cargan las dependencias de React, Material-UI y Babel de forma dinámica.
                        <Code>{`
                            runASCIIMapLoad_inLine(\`
                                ➤🌐 https://unpkg.com
                                │
                                ├──🔗 react@latest/umd/react.production.min.js
                                ├──🔗 react-dom@latest/umd/react-dom.production.min.js
                                ├──🔗 @babel/standalone/babel.min.js
                                └──🔗 @mui/material@latest/umd/material-ui.production.min.js
                            \`);
                        `}</Code>
                    </FormatoDoc>
                }
            },
            {
                nombre: "Secuencias o caracteres Ignorados",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="➤" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar que se está empezando un arból" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="──" />
                                {tab} <ResaltoBasico nocode label="Se usa para decorar el dibujo del arból" />
                            </li>
                        </ul>
                    );
                }
            },
            {
                nombre: "Indicadores de nivel",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="├" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar bifurcacio a la derecha y abajo" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="└" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar bifurcación a la derecha unicamente" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="│" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar que este camino no tiene bifurcacion en ese renglón" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="╧" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar que este camino finaliza" />
                            </li>
                        </ul>
                    );
                },
            },
            {
                nombre: "Decoradores ramas",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="🌐" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar directorio web" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="📁" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar directorio" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="🗀" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar un directorio ignorado" />
                            </li>
                        </ul>
                    );
                }
            },
            {
                nombre: "Decoradores hojas",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="🔗" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar archivo web" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="📄" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar archivo" />
                            </li>
                        </ul>
                    );
                }
            },
            {
                nombre: "Decoradores de tipo de archivo",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="🎨" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar archivo CSS" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="🖼️" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar archivo que tiene .css de mismo nombre" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="📦" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar que un archivo JS es de tipo módulo" />
                            </li>
                            <li>
                                <EmojiASCIIControl icono="🐌" />
                                {tab} <ResaltoBasico nocode label="Se usa para indicar que un archivo JS tiene activado defer" />
                            </li>
                        </ul>
                    );
                }
            },
            {
                nombre: "Decoradores especiales",
                contenido: (thisObj) => {
                    return (
                        <ul>
                            <li>
                                <EmojiASCIIControl icono="🏠" />
                                {tab} <ResaltoBasico nocode label="Se usa para que un archivo aunque esté representado dentro de un directorio, se cargue a nivel raíz" />
                            </li>
                        </ul>
                    );
                }
            },
            {
                nombre: "Decoradores de comandos",
                contenido: (thisObj) => {
                    return (
                        <div>
                            <EmojiASCIIControl icono="🤖" />
                            {tab} <ResaltoBasico nocode label="Indica que se está haciendo llamado a un comando" />

                            <h2>
                                Comandos soportados
                            </h2>

                            <ul>
                                <li>
                                    <Resaltar color="lightgreen">
                                        <code>
                                            JAVASCRIPT (JS)
                                        </code>
                                    </Resaltar>
                                    <br />
                                    Se usa para indicar que los archivos siguientes son tipo JavaScript <ResaltoBasico codeinline label="type='text/javascript'" />
                                </li>
                                <li>
                                    <Resaltar color="lightgreen">
                                        <code>
                                            REACT (JSX)
                                        </code>
                                    </Resaltar>
                                    <br />
                                    Se usa para indicar que los archivos siguientes son de tipo React (JSX) <ResaltoBasico codeinline label="type='text/babel'" />
                                </li>
                            </ul>
                        </div>
                    );
                }
            },
            {
                nombre: "runASCIIMapLoader_inLine(String)",
                nombre_render_as: "CodeInline",
                contenido: (thisObj) => {
                    return <FormatoDoc>
                        Esta función recibe un string que contiene un mapeo ASCII y carga las dependencias de forma dinámica
                        basándose en los caracteres especiales de mapeo y las rutas anidadas de las dependencias.
                        <br /><br />
                        Esta función se debe usar directamente en un script dentro del HTML, porque escribe en tiempo real las dependencias
                        a medida que se carga el documento.

                        <Code language="html" className="noNumerar">{`
                            <!DOCTYPE html>
                            <html lang="es">
                                <head>
                                    <script src="${thisObj.githubPage}/index.js"></script>
                                    <!-- Carga de dependencias -->
                                    <script>
                                            runASCIIMapLoader_inLine("TU MAPEO ASCII");
                                    </script>
                                    <!-- demás contenido del head -->
                                </head>
                                <body>
                                    <!-- Contenido de la página -->
                                </body>
                            </html>
                        `}</Code>
                    </FormatoDoc>;
                }
            },
            {
                nombre: "Mapeos Personales",
                contenido: (thisObj) => {
                    return <FormatoDoc>
                        Este es un objeto que contiene mapeos personales de ASCII que uso frecuentemente en mis proyectos.
                        <br />
                        <br />
                        <h2>
                            Carga general
                        </h2>
                        <br />
                        Se puede cargar todo el objeto con el siguiente comando.
                        <Code language="js" linenumbers={false}>{`
                        Object.values(ASCII_MAPS).forEach((map) => {
                            runASCIIMapLoad_inLine(map);
                        });
                    `}</Code>
                        <br />
                        {
                            Object.entries(ASCII_MAPS).map(([k, map]) => {
                                return ([
                                    <SubEnvolventeSeccion>
                                        <h2>
                                            <Resaltar>
                                                {k}
                                            </Resaltar>
                                        </h2>
                                        <CodeInline language="js" scroll={false}>
                                            runASCIIMapLoad_inLine(ASCII_MAPS.{k});
                                        </CodeInline>
                                        <br />
                                        <Code linenumbers={false} className="simple">{
                                            map.replaceAll("//", "/\u2060/")
                                        }</Code>
                                    </SubEnvolventeSeccion>,
                                    <br />
                                ]);
                            })
                        }
                    </FormatoDoc>;
                }
            },
        ],
    });

    function ResaltoBasico(props) {
        return <div
            {...props}
            style={{
                display: "inline-block",
                padding: "12px",
                borderRadius: "10px",
                backgroundColor: "black",
                fontSize: "90%",
                margin: "0 5px"
            }}
        >
            {(() => {
                if (props.codeinline) {
                    return <CodeInline scroll={false}>{props.label}</CodeInline>;
                }
                return props.label;
            })()}
        </div>;
    }

    function EmojiASCIIControl({ icono }) {
        return (
            <span
                style={{
                    fontSize: "150%",
                    color: "Khaki"
                }}
            >
                {icono}
            </span>
        );
    }
})();