ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <EnvolventePagina>
                {esquemaGeneralLibreria(_ASCIIMapLoader_)}
            </EnvolventePagina>
            <BotonLinkPortafolio />
        </div>
    </div>,
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);