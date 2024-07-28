const _ASCIIMapLoader_ = {
    nombre: 'ASCII Map Loader',
    slogan: "Carga dependencias JS, JSX o CSS con dibujos ASCII",
    img: "src/img/logo.jpeg",

    github: "https://github.com/Jeff-Aporta/ASCIIMapLoader",

    tab: <b>
        &nbsp;&nbsp;&nbsp;&nbsp;
    </b>,

    resumen: function ({ inclusionEnPortafolio, rel="" }) {
        return <p>
            <FormatoDoc>
                <Resaltar>ASCII Map Loader</Resaltar>&nbsp;
                es una herramienta que permite cargar dependencias de forma dinámica y gráfica en un HTML.
            </FormatoDoc>
            <br />
            <br />
            <img
                src={
                    inclusionEnPortafolio ?
                        [
                            rel, this.img
                        ].join("/") :
                        this.img
                }
                style={{
                    float: 'left',
                    margin: '10px 40px 0 0',
                    width: '200px',
                    borderRadius: '20px',
                }}
            />
            <br />
            <div
                style={{
                    display: 'inline-block',
                }}
            >
                <ul className="punto-centrico">
                    <li>
                        Se dibujan las dependencias en forma de árbol, donde cada rama es una dependencia y cada hoja es un archivo.
                    </li>
                    <li>
                        Tiene decoradores con emojis para indicar el tipo de archivos, directorios y comandos.
                    </li>
                    <li>
                        Tiene funciones primitivas que permiten ejecutar comandos.
                    </li>
                    <li>
                        Soporta archivos de tipo <b>JavaScript</b>, <b>React (JSX)</b> y <b>CSS</b>.
                    </li>
                </ul>
            </div>
        </p>;
    },

    secciones: [
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return <React.Fragment>
                    <p>
                        Para usar <b>ASCII Map Loader</b> en un proyecto web, se debe agregar el siguiente script.
                        <br /><br />
                        Se puede usar el siguiente enlace para cargar el script.
                    </p>
                    <Code nocode className="link">
                        https://cdn.jsdelivr.net/gh/Jeff-Aporta/ASCIIMapLoader@main/index.js
                    </Code>
                    <p>
                        También pueden usar un archivo llamado <Resaltar>mapeos-personales.js</Resaltar> que contiene mapeos personales de
                        ASCII que uso frecuentemente en mis proyectos.
                        <br /><br />
                        Al final de este documento se encuentra un ejemplo de uso de este archivo.
                    </p>
                    <Code nocode className="link">
                        https://cdn.jsdelivr.net/gh/Jeff-Aporta/ASCIIMapLoader@main/mapeos-personales.js
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
                </React.Fragment>
            }
        },
        {
            nombre: "Emojis y ASCII de control",
            contenido: (thisObj) => {
                return <React.Fragment>
                    <ul className="punto-centrico">
                        <li>
                            <h2>
                                Ignorados
                            </h2>
                            <SubEnvolventeSeccion>
                                <ul>
                                    <li>
                                        <EmojiASCIIControl icono="➤" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para indicar que se está empezando un arból" />
                                    </li>
                                    <li>
                                        <EmojiASCIIControl icono="──" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para decorar el dibujo del arból" />
                                    </li>
                                </ul>
                            </SubEnvolventeSeccion>
                            <br />
                        </li>
                        <li>
                            <h2>
                                Indicadores de nivel
                            </h2>
                            <SubEnvolventeSeccion>
                                <ul>
                                    <li>
                                        <EmojiASCIIControl icono="├" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para indicar bifurcacio a la derecha y abajo" />
                                    </li>
                                    <li>
                                        <EmojiASCIIControl icono="└" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para indicar bifurcación a la derecha unicamente" />
                                    </li>
                                    <li>
                                        <EmojiASCIIControl icono="│" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para indicar que este camino no tiene bifurcacion en ese renglón" />
                                    </li>
                                    <li>
                                        <EmojiASCIIControl icono="╧" />
                                        {thisObj.tab} <ChipCode nocode label="Se usa para indicar que este camino finaliza" />
                                    </li>
                                </ul>
                            </SubEnvolventeSeccion>
                            <br />
                        </li>
                        <li>
                            <h2>
                                Decoradores
                            </h2>
                            <ul>
                                <li>
                                    <Resaltar>
                                        RAMAS
                                    </Resaltar>
                                    <SubEnvolventeSeccion>
                                        <ul>
                                            <li>
                                                <EmojiASCIIControl icono="🌐" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para indicar directorio web" />
                                            </li>
                                            <li>
                                                <EmojiASCIIControl icono="📁" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para indicar directorio" />
                                            </li>
                                            <li>
                                                <EmojiASCIIControl icono="🗀" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para indicar un directorio ignorado" />
                                            </li>
                                        </ul>
                                    </SubEnvolventeSeccion>
                                    <br />
                                </li>
                                <li>
                                    <h3>
                                        <Resaltar>
                                            HOJAS
                                        </Resaltar>
                                    </h3>
                                    <SubEnvolventeSeccion>
                                        <Resaltar color="plum">
                                            Obligatorio para hojas
                                        </Resaltar>
                                        <br /><br />
                                        <ul>
                                            <li>
                                                <li>
                                                    <EmojiASCIIControl icono="🔗" />
                                                    {thisObj.tab} <ChipCode nocode label="Se usa para indicar archivo web" />
                                                </li>
                                                <li>
                                                    <EmojiASCIIControl icono="📄" />
                                                    {thisObj.tab} <ChipCode nocode label="Se usa para indicar archivo" />
                                                </li>
                                            </li>
                                        </ul>
                                    </SubEnvolventeSeccion>
                                    <br />
                                    <SubEnvolventeSeccion>
                                        <Resaltar color="plum">
                                            Tipo de archivo
                                        </Resaltar>
                                        <br /><br />
                                        <ul>
                                            <li>
                                                <EmojiASCIIControl icono="🎨" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para indicar archivo CSS" />
                                            </li>
                                            <li>
                                                <EmojiASCIIControl icono="🖼️" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para indicar archivo que tiene .css de mismo nombre" />
                                            </li>
                                        </ul>
                                    </SubEnvolventeSeccion>
                                    <br />
                                    <SubEnvolventeSeccion>
                                        <Resaltar color="plum">
                                            Especial
                                        </Resaltar>
                                        <br /><br />
                                        <ul>

                                            <li>
                                                <EmojiASCIIControl icono="🏠" />
                                                {thisObj.tab} <ChipCode nocode label="Se usa para que un archivo aunque esté representado dentro de un directorio, se cargue a nivel raíz" />
                                            </li>
                                        </ul>
                                    </SubEnvolventeSeccion>
                                    <br />
                                </li>
                                <li>
                                    <Resaltar>
                                        COMANDOS
                                    </Resaltar>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            <EmojiASCIIControl icono="🤖" />
                                            {thisObj.tab} <ChipCode nocode label="Indica que se está haciendo llamado a un comando" />
                                            <SubEnvolventeSeccion>
                                                <Resaltar color="plum">
                                                    Comandos soportados
                                                </Resaltar>
                                                <br />
                                                <br />
                                                <ul>
                                                    <li>
                                                        <Resaltar color="lightgreen">
                                                            <code>
                                                                JAVASCRIPT (JS)
                                                            </code>
                                                        </Resaltar>
                                                        <br />
                                                        Se usa para indicar que los archivos siguientes son tipo JavaScript <ChipCode label="type='text/javascript'" />
                                                    </li>
                                                    <li>
                                                        <Resaltar color="lightgreen">
                                                            <code>
                                                                REACT (JSX)
                                                            </code>
                                                        </Resaltar>
                                                        <br />
                                                        Se usa para indicar que los archivos siguientes son de tipo React (JSX) <ChipCode label="type='text/babel'" />
                                                    </li>
                                                </ul>
                                            </SubEnvolventeSeccion>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </React.Fragment>;

                function EmojiASCIIControl({ icono }) {
                    return <span style={{ fontSize: "150%" }}>{icono}</span>;
                }
            }
        },
        {
            nombre: "Funciones",
            contenido: (thisObj) => {
                return <React.Fragment>
                    <h1>
                        <CodeInline>
                            runASCIIMapLoader_inLine(String);
                        </CodeInline>
                    </h1>
                    <br />
                    Esta función recibe un string que contiene un mapeo ASCII y carga las dependencias de forma dinámica
                    basándose en los caracteres especiales de mapeo y las rutas anidadas de las dependencias.
                    <br /><br />
                    Esta función se debe usar directamente en un script dentro del HTML, porque escribe en tiempo real las dependencias
                    a medida que se carga el documento.

                    <Code language="html" className="noNumerar">{`
                        <!DOCTYPE html>
                        <html lang="es">
                            <head>
                                <script src="https://cdn.jsdelivr.net/gh/Jeff-Aporta/ASCIIMapLoader@main/index.js"></script>
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
                </React.Fragment>;
            }
        },
        {
            nombre: "Mapeos Personales",
            contenido: (thisObj) => {
                return <React.Fragment>
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
                                    <br />
                                    <CodeInline language="js">
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
                </React.Fragment>;
            }
        },
    ],
    footer: function ({ inclusionEnPortafolio }) {
        return (
            !inclusionEnPortafolio ?
                <React.Fragment>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <BotonLinkPortafolio />
                </React.Fragment> :
                ""
        );
    }
};