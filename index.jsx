ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <PaginaASCIIMapLoader />
        </div>
    </div>, 
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);