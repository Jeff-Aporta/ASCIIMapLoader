function PaginaASCIIMapLoader(props) {
    return (
        <div className="esquema-principal">
            <div className="contenedor-pagina">
                <EnvolventePagina>
                    {esquemaGeneralLibreria(_ASCIIMapLoader_, props)}
                </EnvolventePagina>
            </div>
        </div>
    );
}