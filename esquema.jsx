function PaginaASCIIMapLoader({
    inclusionEnPortafolio = true,
}) {
    const tab = <b>
        &nbsp;&nbsp;&nbsp;&nbsp;
    </b>;

    setTimeout(() => {
        PR.prettyPrint();
    }, 0);

    return (
        <EnvolventePagina
            className="PaginaASCIIMapLoader"
        >
            <Button
                size="large"
                variant="contained"
                href="https://github.com/Jeff-Aporta/ASCIIMapLoader"
                target="_blank"
                style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "black",
                    border: "1px solid #333",

                    zIndex: 10,
                }}
                startIcon={<i className="fab fa-github"></i>}
            >
                Github
            </Button>
            <h1
                style={{
                    fontSize: "50px",
                }}
            >
                <Titulo
                    texto="ASCII Map Loader"
                />
            </h1>
            <br />
            <EnvolventeSeccion
                elevation={1}
                style={{
                    padding: "30px",
                    borderRadius: "20px",
                }}
            >
                <h1>
                    Resumen
                </h1>
                <p>
                    <b>ASCII Map Loader</b> es una herramienta que permite cargar dependencias de forma dinámica en un proyecto web.
                    <br />
                    <br />
                    Se basa en un mapa ASCII que contiene las rutas de las dependencias a cargar.
                </p>
                <br />
                <h1>
                    Usar con CDN
                </h1>
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
                <br />
                <h2>
                    Agregando dependencias de forma dinámica
                </h2>
                <br />
                En este ejemplo se cargan las dependencias de React, Material-UI y Babel de forma dinámica.
                <Code>{
                    eliminarTabulacionesInnecesarias(`
                            runASCIIMapLoad_inLine(\`
                                ➤🌐 https://unpkg.com
                                │
                                ├──🔗 react@latest/umd/react.production.min.js
                                ├──🔗 react-dom@latest/umd/react-dom.production.min.js
                                ├──🔗 @babel/standalone/babel.min.js
                                └──🔗 @mui/material@latest/umd/material-ui.production.min.js
                            \`);
                    `)}
                </Code>

                <h1>
                    Iconos de control
                </h1>
                <ul className="punto-centrico">
                    <li>
                        <h2>
                            Ignorados
                        </h2>
                        <SubEnvolventeSeccion>
                            <ul>
                                <li>
                                    ➤ {tab} <ChipCode nocode label="Se usa para indicar que se está empezando un arból" />
                                </li>
                                <li>
                                    ── {tab} <ChipCode nocode label="Se usa para decorar el dibujo del arból" />
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
                                    ├ {tab} <ChipCode nocode label="Se usa para indicar bifurcacio a la derecha y abajo" />
                                </li>
                                <li>
                                    └ {tab} <ChipCode nocode label="Se usa para indicar bifurcación a la derecha unicamente" />
                                </li>
                                <li>
                                    │ {tab} <ChipCode nocode label="Se usa para indicar que este camino no tiene bifurcacion en ese renglón" />
                                </li>
                                <li>
                                    ╧ {tab} <ChipCode nocode label="Se usa para indicar que este camino finaliza" />
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
                                            🌐 {tab} <ChipCode nocode label="Se usa para indicar directorio web" />
                                        </li>
                                        <li>
                                            📁 {tab} <ChipCode nocode label="Se usa para indicar directorio" />
                                        </li>
                                        <li>
                                            🗀 {tab} <ChipCode nocode label="Se usa para indicar un directorio ignorado" />
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
                                    <ul>
                                        <li>
                                            <li>
                                                🔗 {tab} <ChipCode nocode label="Se usa para indicar archivo web" />
                                            </li>
                                            <li>
                                                📄 {tab} <ChipCode nocode label="Se usa para indicar archivo" />
                                            </li>
                                        </li>
                                    </ul>
                                </SubEnvolventeSeccion>
                                <br />
                                <SubEnvolventeSeccion>
                                    <Resaltar color="plum">
                                        Tipo de archivo
                                    </Resaltar>
                                    <ul>
                                        <li>
                                            🎨 {tab} <ChipCode nocode label="Se usa para indicar archivo CSS" />
                                        </li>
                                        <li>
                                            🖼️ {tab} <ChipCode nocode label="Se usa para indicar archivo que tiene .css de mismo nombre" />
                                        </li>
                                    </ul>
                                </SubEnvolventeSeccion>
                                <br />
                                <SubEnvolventeSeccion>
                                    <Resaltar color="plum">
                                        Especial
                                    </Resaltar>
                                    <ul>

                                        <li>
                                            🏠 {tab} <ChipCode nocode label="Se usa para que un archivo aunque esté representado dentro de un directorio, se cargue a nivel raíz" />
                                        </li>
                                    </ul>
                                </SubEnvolventeSeccion>
                                <br />
                            </li>
                            <li>
                                <Resaltar>
                                    COMANDOS
                                </Resaltar>
                                <ul>
                                    <li>
                                        🤖 {tab} <ChipCode nocode label="Indica que se está haciendo llamado a un comando" />
                                        <SubEnvolventeSeccion>
                                            <Resaltar color="plum">
                                                Comandos soportados
                                            </Resaltar>
                                            <ul>
                                                <li>
                                                    <Resaltar color="lightgreen">
                                                        JAVASCRIPT (JS)
                                                    </Resaltar>
                                                    <br />
                                                    Se usa para indicar que el archivo es de tipo JavaScript <ChipCode label="type='text/javascript'" />
                                                </li>
                                                <li>
                                                    <Resaltar color="lightgreen">
                                                        REACT (JSX)
                                                    </Resaltar>
                                                    <br />
                                                    Se usa para indicar que el archivo es de tipo React <ChipCode label="type='text/babel'" />
                                                </li>
                                            </ul>
                                        </SubEnvolventeSeccion>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </EnvolventeSeccion>
            <br />
            <br />
            <h1
                style={{
                    fontSize: "50px",
                }}
            >
                <Titulo
                    texto="Mapeos Personales"
                />
            </h1>
            <br />
            <EnvolventeSeccion>
                Este es un objeto que contiene mapeos personales de ASCII que uso frecuentemente en mis proyectos.
                <br />
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
                                <pre className="prettyprint mini lang-jsx linenums:1">
                                    {eliminarTabulacionesInnecesarias(map.replaceAll("//", "/\u2060/"))}
                                </pre>
                            </SubEnvolventeSeccion>,
                            <br />
                        ]);
                    })
                }
            </EnvolventeSeccion>

            <br />
            <br />
            <hr />
            <br />
            <br />

            {inclusionEnPortafolio ? <BotonLinkPortafolio /> : ""}
        </EnvolventePagina>
    );

    function eliminarTabulacionesInnecesarias(stringCode) {
        let renglones = stringCode.split('\n').filter(e => e.trim());
        const tabulaciones = renglones[0].match(/^\s*/)[0].length;
        renglones = renglones.map((e, i) => e.slice(tabulaciones));
        return renglones.join('\n');
    }
}

function ChipCode(props) {
    let label = props.label;
    delete props.label;
    return (
        <Chip
            {...props}
            style={{
                backgroundColor: props.nocode ? "rgba(0,0,0,0.4)" : "black",
                color: "white",
            }}
            label={
                <Code
                    className={`
                        solo-texto
                        ${props.nocode ? "nocode" : ""}
                    `}
                    linenumbers={false}
                    esCopiable={false}
                >
                    {label}
                </Code>
            }
        />
    );
}