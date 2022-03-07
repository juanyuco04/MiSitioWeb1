function  crearTabla () {
    let nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("tabla_js");
    contenedor.appendChild(nodoTabla);

    let filaPrincipal = document.createElement("tr");
    nodoTabla.appendChild(filaPrincipal);

    let filaHeadign = document.createElement("th");
    filaPrincipal.appendChild(filaHeadign);
    let filaEncabezado = document.createTextNode("Código");
    filaHeadign.appendChild(filaEncabezado); 

    let filaDescripcion = document.createElement("th");
    filaPrincipal.appendChild(filaDescripcion);
    let filaEncabezado2 = document.createTextNode("Descripción");
    filaDescripcion.appendChild(filaEncabezado2); 

    let filaValorUnitario = document.createElement("th");
    filaPrincipal.appendChild(filaValorUnitario);
    let filaEncabezado3 = document.createTextNode("Valor de producto");
    filaValorUnitario.appendChild(filaEncabezado3); 

    let filaUnidadesStock = document.createElement("th");
    filaPrincipal.appendChild(filaUnidadesStock);
    let filaEncabezado4 = document.createTextNode("Unidades en stock");
    filaUnidadesStock.appendChild(filaEncabezado4); 

   
    nodoTabla.setAttribute("class", "tabla-style");
    nodoTabla.setAttribute("id", "tabla-resultado");
}

function cargarProducto (){
    if(!document.getElementById("tabla-resultado"))
    crearTabla()
else(
    alert("La tabla ya se ejecuto")
)
}


/* function cargarProducto (){

    validartabla();
    
    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo)

    

}

function cargarInfTabla (codigo){
    let nodoproducto = document.createElement("tr");
    nodoTabla.appendChild(nodoproducto);

    let nodoCodigoTD = document.createElement("td")
    nodoproducto.appendChild(nodoCodigoTD);
    nodoproducto.appendChild(codigo);
} */