
let nodoTabla = "";

function  crearTabla () {
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("tabla_js");
    contenedor.appendChild(nodoTabla);
    contenedor.setAttribute("class", "tabla_principal")

    let filaPrincipal = document.createElement("tr");
    nodoTabla.appendChild(filaPrincipal);
    filaPrincipal.setAttribute("class", "fila_encabezado")

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

function validarTabla (){
    if(!document.getElementById("tabla-resultado"))
        crearTabla()
   
}
 function cargarProducto(){
      
    validarTabla();

    let codigoProducto = document.getElementById("codigo").value;
    let codigoProductonodo = document.createTextNode(codigoProducto);

    let descripcionProducto = document.getElementById("descripcion").value;
    let descripcionProductoNodo = document.createTextNode(descripcionProducto);

    let valorUnitario =  document.getElementById("valorUnitario").value;
    let valorUnitarioNodo = document.createTextNode(valorUnitario);

    let productoDisponible = document.getElementById("Stock").value;
    let productoDisponibleNodo = document.createTextNode(productoDisponible);
    

    cargarInfTabla(codigoProductonodo, descripcionProductoNodo, valorUnitarioNodo, productoDisponibleNodo);
    limpiarFormulario ()
    

 }


function cargarInfTabla (codigo, descripcion, valor, Stock){
    let codigoFilaProducto =  document.createElement("tr");
    nodoTabla.appendChild(codigoFilaProducto);

    let productoTDCodigo = document.createElement("td");
    codigoFilaProducto.appendChild(productoTDCodigo);
    productoTDCodigo.appendChild(codigo);

    let productoTDDescripcion = document.createElement("td");
    codigoFilaProducto.appendChild(productoTDDescripcion);
    productoTDDescripcion.appendChild(descripcion);

    let productoTDValorUnitario = document.createElement("td");
    codigoFilaProducto.appendChild(productoTDValorUnitario);
    productoTDValorUnitario.appendChild(valor);

    let valorTDUnitario = document.createElement("td");
    codigoFilaProducto.appendChild(valorTDUnitario);
    valorTDUnitario.appendChild(Stock);

  
}

function limpiarFormulario(){
    let limpierCodigo = document.getElementById("codigo").value = ""
    document.getElementById("codigo").innerHTML = limpierCodigo

    let limpierDescripcion = document.getElementById("descripcion").value = ""
    document.getElementById("descripcion").innerHTML = limpierDescripcion

    let limpierValor = document.getElementById("valorUnitario").value = ""
    document.getElementById("valorUnitario").innerHTML = limpierValor

    let limpierStock = document.getElementById("Stock").value = ""
    document.getElementById("Stock").innerHTML = limpierStock


}

function evaluarInput(){
    let evaluarCodigo = document.getElementById("codigo").value 
    let evaluarDescripcion = document.getElementById("descripcion").value
    let evaluarValor = document.getElementById("valorUnitario").value
    let evaluarStock = document.getElementById("Stock").value

    if( evaluarCodigo == "" || evaluarDescripcion == ""  || evaluarValor == "" || evaluarStock == ""){ 
        
        alert("ingrese el valor requerido")
    }else {
        cargarProducto()  
    }
}

