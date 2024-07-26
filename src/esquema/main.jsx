function PaginaASCIIMapLoader({
    inclusionEnPortafolio = false,
}) {
    return (
        <div className="esquema-principal">
            <div className="contenedor-pagina">
                <EnvolventePagina>
                    {esquemaGeneralLibreria(_ASCIIMapLoader_, { inclusionEnPortafolio })}
                </EnvolventePagina>
            </div>
        </div>
    );
}