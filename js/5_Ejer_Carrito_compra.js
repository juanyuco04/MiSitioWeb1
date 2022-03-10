"use-strict"
 
    let costo_producto = 266000

function aumentarCantProducto (){

    aumentarCantProductoInput()
    costoProducto()

    let cantidad_producto = document.getElementById("can_Productos").innerHTML;
    let cantidad_productoInt = parseInt(cantidad_producto);

    if ( cantidad_producto <10) {
        /* alert("subir maldito") */
        document.getElementById("can_Productos").innerHTML= cantidad_productoInt + 1
    }
        
}

function aumentarCantProductoInput (){

    let cantidad_producto1 = document.getElementById("cantidad_producto").value;
    let cantidad_productoInt2 = parseInt(cantidad_producto1);
    
    if ( cantidad_producto1 <10) {
            /*  alert("subir maldito")  */
        document.getElementById("cantidad_producto").value = cantidad_productoInt2 + 1
    }
            
}

function costoProducto (){ 
    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let subtotal = costo_producto * Number(cantidad_producto);
    /* let finSubtotal = new Intl.NumberFormat('es-ES').format(subtotal); */
    document.getElementById("costo_producto").innerHTML = subtotal
    /* alert("holis") */
}

 



function disminuirCantProducto (){

    disminuirCantProductoInput()
    costoProducto()

    let cantidad_producto = document.getElementById("can_Productos").innerHTML;
    let cantidad_productoInt = parseInt(cantidad_producto);
     
    if (cantidad_producto > 0){
      /*   alert("restar maldito") */
        document.getElementById("can_Productos").innerHTML = cantidad_productoInt - 1 + "s"
    }
}

function disminuirCantProductoInput (){

    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let cantidad_productoInt = parseInt(cantidad_producto);
     
    if (cantidad_producto > 0){
      /*   alert("restar maldito") */
        document.getElementById("cantidad_producto").value = cantidad_productoInt - 1 
    }
}


/* function elininarProducto(){
    
    let cantidad_Producto = document.getElementById("cantidad_producto").value;
    let cantidad_productoInt = parseInt(cantidad_Producto);

    if (cantidad_Producto >0 ) {
    let eliminarContador = cantidad_productoInt * 0
    document.getElementById("cantidad_producto").innerHTML = eliminarContador
    eliminarContador.innerHTML
    alert("hola")
}

} */

/*  
let cantidadProducto 
let sumarProducto = "";
let restarProductos = "";
let totalProductos = 226000;
let cantidadYaProducto


function funSumarProducto (){
    if (sumarProducto < 10){
       restarProductos = document.getElementById("cantidad_producto").value = ++sumarProducto;
       restarProductos.innerHTML


       cantidadProducto = document.getElementById("can_Productos");
       cantidadProducto.innerHTML = sumarProducto;

        cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto.innerHTML = sumarProducto * totalProductos ;
        
    }

}
function funRestarProducto (){
    if (restarProductos > 1){
    sumarPro = document.getElementById("cantidad_producto").value = --restarProductos;
    restarProductos.innerHTML = sumarProducto

       cantidadProducto = document.getElementById("can_Productos");
       cantidadProducto.innerHTML = restarProductos;

       cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto = sumarPro * totalProductos ;
        cantidadProducto.innerHTML
    }
    
}
 */


