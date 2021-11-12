/* 
Suma.......+
Resta......-
Multiplicacion.....*
Divicion.......%
*/

/* Crear 3 productos, los inicializamos con un valor */
/* A los 3 productos les resta el 5% */
/*  Existencia de cada producto  y hallar el costo del inventario */

"user strict"
var nombreProducto = "Telefono";
var valorProducto1 = 850000;
var descuentoProducto = .05;
var costoTotalP1 =  valorProducto1 - (valorProducto1 * descuentoProducto);
console.log("valor total del producto con el descuento" + "\n" + "$" + costoTotalP1);

var nombreProducto = "Portatil";
var valorProducto2 = 1500000;
var descuentoProducto = .05;
var costoTotalP2 =  valorProducto2 - (valorProducto2 * descuentoProducto);
console.log("valor total del producto con el descuento" + "\n" + "$" + costoTotalP2);

var nombreProducto = "Motocicleta";
var valorProducto3 = 4200000;
var descuentoProducto = .05;
var costoTotalP3 =  valorProducto3 - (valorProducto3 * descuentoProducto);
console.log("valor total del producto con el descuento" + "\n" + "$" + costoTotalP3);


var costoTotalcompra = costoTotalP1 + costoTotalP2 + costoTotalP3;
console.log("valor total de la comprar de los tres articulos" + "\n" + "$" + costoTotalcompra );

var costoTotSinDescuento = valorProducto1 + valorProducto2 + valorProducto3;
console.log("valor total sin el descuento" + "\n" + "$" + costoTotSinDescuento);

var descuestoTotal = costoTotSinDescuento - costoTotalcompra;
console.log("descuento total" + "\n" + "$" + descuestoTotal);

