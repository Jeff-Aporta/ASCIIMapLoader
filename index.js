function runASCIIMapLoader_inLine(asciiMaploader) {
  const decoradores = {
    enRaiz: "🏠",
    CSS: "🎨",
    JSModule: "📦",
    JSXCSS: "🖼️",
    defer: "🐌",
    ramas: ["🌐", "📁", "🗀"],
    hojas: ["🔗", "📄", "🎨", "🖼️", "🏠", "📦"],
    comandos: ["🤖"],
  };

  recorrerRecursivamenteTodosLosNodos(ASCIIMapLoader2JSON(asciiMaploader));

  function recorrerRecursivamenteTodosLosNodos(node, rutaAcumulada) {
    node.list.forEach((e) => {
      if (e.folder) {
        recorrerRecursivamenteTodosLosNodos(
          e,
          [rutaAcumulada, e.folder].filter((e) => e).join("/")
        );
      } else if (e.archivo) {
        writeScript({
          archivo: [rutaAcumulada, e.archivo].filter((e) => e).join("/"),
          type: e.type,
        });
      }
    });
  }

  function writeScript({ archivo, type }) {
    let ext;
    const defer = archivo.includes(decoradores.defer);
    archivo = archivo.replace(decoradores.defer, "").trim();

    intuirExtension();

    let stringLoad =
      ext == ".css"
        ? `<link rel="stylesheet" href="${archivo}">`
        : `<script type="${type}" src="${archivo}${ext ?? ""}" ${
            defer ? "defer" : ""
          }><\/script>`;

    document.write(stringLoad);

    function intuirExtension() {
      const isJSX = archivo.endsWith(".jsx");
      const isJS = [".js", ".mjs"].some(ext => archivo.endsWith(ext))
      const isCSS = archivo.endsWith(".css");
      if (isJSX || isJS) {
        protocoloDeExtensionQuemada();
      } else if (!isCSS) {
        protocoloDeExtensionTipada();
      } else {
        ext = ".css";
      }

      function protocoloDeExtensionTipada() {
        switch (type) {
          case "module":
            ext = ".mjs";
            break;
          case "text/javascript":
            ext = ".js";
            break;
          case "text/babel":
            ext = ".jsx";
            break;
        }
      }

      function protocoloDeExtensionQuemada() {
        if (isJSX) {
          type = "text/babel";
        } else if (isJS && type != "module") {
          type = "text/javascript";
        }
      }
    }
  }

  //---------------- conversor de ASCIIMapLoader a JSON

  function ASCIIMapLoader2JSON(stringASCIIMapLoader) {
    const ignorar = ["➤", "──"];
    const indicadorDeNivel = ["├", "└", "│", "╧"];

    let renglones = stringASCIIMapLoader
      .split("\n")
      .map((e) => ignorar.reduce((acc, c) => acc.replace(c, ""), e))
      .map((e) =>
        e.includes(decoradores.enRaiz)
          ? indicadorDeNivel.reduce((acc, c) => acc.replace(c, ""), e)
          : e
      )
      .map((e) => e.trim())
      .filter(
        (e) =>
          e != "" &&
          !e
            .split("")
            .every((e) => indicadorDeNivel.some((c) => c == e) || e == " ")
      );

    {
      let renglonesJSXCSS = [];

      renglones.forEach((e) => {
        if (e.includes(decoradores.JSXCSS)) {
          renglonesJSXCSS.push(e.replace(decoradores.JSXCSS, "📄"));
          renglonesJSXCSS.push(e.replace(decoradores.JSXCSS, "🎨"));
        } else {
          renglonesJSXCSS.push(e);
        }
      });

      renglones = renglonesJSXCSS;
    }

    let enRaiz = renglones.filter((e) => e.includes(decoradores.enRaiz));
    renglones = renglones.filter((e) => !e.includes(decoradores.enRaiz));

    renglones = [...enRaiz, ...renglones];

    let retorno = refinarArbol(generarArbol());

    return retorno;

    function refinarArbol(arbol) {
      refinacionGeneral();
      refinarArchivo();
      recorrerTodosLosNodos();
      refinarCarpeta();

      return arbol;

      function refinacionGeneral() {
        delete arbol.padre;
        delete arbol.nivel;
      }

      function refinarArchivo() {
        if (arbol.archivo) {
          arbol.archivo = limpiarNombre(arbol.archivo);
        }
      }

      function refinarCarpeta() {
        if (arbol.folder != undefined) {
          arbol.folder = limpiarNombre(arbol.folder);
          delete arbol.type;
        }
      }

      function recorrerTodosLosNodos() {
        if (arbol.list) {
          removerCarpetasInactivas();
          recorrerRecursivamenteTodosLosNodos();
        }

        function recorrerRecursivamenteTodosLosNodos() {
          arbol.list = arbol.list.map((e) => refinarArbol(e));
        }

        function removerCarpetasInactivas() {
          arbol.list = arbol.list.filter(
            (e) => e.archivo || (e.folder && !e.folder.includes("🗀"))
          );
        }
      }

      function limpiarNombre(nombre) {
        nombre = [
          indicadorDeNivel,
          decoradores.hojas,
          decoradores.ramas,
        ].reduce(
          (resultado, coleccion) =>
            (resultado = coleccion.reduce(
              (acc, c) => (acc = acc.replaceAll(c, "")),
              resultado
            )),
          nombre
        );
        nombre = nombre.trim();
        return nombre;
      }
    }

    function generarArbol({
      padre = {
        padre: null,
        folder: "",
        list: [],
        type: "text/javascript",
        nivel: -1,
      },
      node,
    } = {}) {
      let renglon = node ? "" : renglones.shift();

      if (renglon == undefined) {
        return padre;
      }

      let determinarNivel = renglon
        .split("")
        .filter((e) => indicadorDeNivel.some((c) => c == e)).length;

      if (node) {
        if (padre.nivel < node.nivel) {
          padre.list.push(node);
          node.padre = node.padre.padre;
          generarArbol({ padre: node });
        } else {
          generarArbol({ padre: padre.padre, node });
        }
      } else {
        if (decoradores.comandos.some((e) => renglon.includes(e))) {
          ejecutarComando();
          generarArbol({ padre });
        } else {
          const esRama = decoradores.ramas.some((e) => renglon.includes(e));
          const esHoja = decoradores.hojas.some((e) => renglon.includes(e));

          if (esRama) {
            const newRoot = {
              padre,
              folder: renglon,
              type: padre.type,
              list: [],
              nivel: determinarNivel,
            };

            if (determinarNivel > padre.nivel) {
              padre.list.push(newRoot);
              generarArbol({
                padre: newRoot,
              });
            } else {
              generarArbol({
                padre: padre.padre,
                node: newRoot,
              });
            }
          } else if (esHoja) {
            let type = padre.type;

            if (renglon.includes(decoradores.CSS)) {
              if (!renglon.endsWith(".css")) {
                renglon += ".css";
              }
            }

            if (renglon.includes(decoradores.JSModule)) {
              type = "module";
              if (!renglon.endsWith(".js")) {
                renglon += ".js";
              }
            }

            const newRoot = {
              padre,
              archivo: renglon,
              type,
              nivel: determinarNivel,
            };

            if (padre.folder != undefined && determinarNivel > padre.nivel) {
              padre.list.push(newRoot);
              generarArbol({
                padre: newRoot,
              });
            } else {
              generarArbol({
                padre: padre.padre,
                node: newRoot,
              });
            }
          }
        }
        return padre;
      }

      function ejecutarComando() {
        let comandos = Object.entries({
          "JAVASCRIPT (JS)": () => {
            padre.type = "text/javascript";
          },
          "REACT (JSX)": () => {
            padre.type = "text/babel";
          },
        })
          .filter(([k]) => renglon.includes(k))
          .forEach(([k, v]) => v());
      }
    }
  }
}
