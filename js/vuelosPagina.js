
class vuelosDatos {
    constructor(codigoVuelo1, precio, origenVuelo, fechaInicio, horasalida, duracionVuelo, fechaFin, horaLlegada, destinoVuelo ){
    this.codigoVuelo1 = codigoVuelo1;
    this.precio = precio;
    this.origenVuelo = origenVuelo;
    this.fechaInicio = fechaInicio;
    this.horasalida = horasalida;
    this.duracionVuelo = duracionVuelo;
    this.fechaFin = fechaFin;
    this.horaLlegada = horaLlegada;
    this.destinoVuelo = destinoVuelo;
    }
}
let vuelo = [{
    "codigoVuelo1": "P2-204",
    "precio" : "$ 168.999",
    "origenVuelo" : "Barranquilla",
    "fechaInicio": "viernes 08 Abril",
    "horasalida" : "Salida 05:08 PM",
    "duracionVuelo" : "1 Hora(s) 30 Minutos(s)",
    "fechaFin": "viernes 08 Abril",
    "horaLlegada" : "llegada 08:54 PM",
    "destinoVuelo" : "San Andres",

}];

function mostrarVuelos() {
    cargarVuelos(vuelo[0].codigoVuelo1,  vuelo[0].precio, vuelo[0].origenVuelo, vuelo[0].fechaInicio,  vuelo[0].horasalida, vuelo[0].duracionVuelo, vuelo[0].fechaFin,);
}

function cargarVuelos(codigoVuelo1, precio, origenVuelo, fechaInicio,  horasalida, duracionVuelo, fechaFin,){
 /*    alert("hola") */
    let contendorVuelos = document.getElementById("vuelos")
    let vueloPrimero = document.createElement("div")
    contendorVuelos.appendChild(vueloPrimero)
    /* creamos el primer contenedor */
    let codigoVuelo = document.createElement("div")
    vueloPrimero.appendChild(codigoVuelo)


    let numeroVuelo = document.createElement("span")
    codigoVuelo.appendChild(numeroVuelo)
    let spanvalor = document.createTextNode(codigoVuelo1)
    numeroVuelo.appendChild(spanvalor) 

    let precioVuelo = document.createElement("label")
    codigoVuelo.appendChild(precioVuelo)
    let valorVuelo = document.createTextNode(precio);
    precioVuelo.appendChild(valorVuelo)

 /* crreamos el primer contenedor que va en la parte superior con el codigo y el precio */

    let inicioVuelo = document.createElement("div")
    vueloPrimero.appendChild(inicioVuelo)
    let parrafoOrigen = document.createElement("p")
    inicioVuelo.appendChild(parrafoOrigen)
    let InicioVueloP = document.createTextNode(origenVuelo)
    parrafoOrigen.appendChild(InicioVueloP)
/// origen del vuelo 
    let descripcionVuelo = document.createElement("div")
    vueloPrimero.appendChild(descripcionVuelo)
    let fechaInicio1 = document.createElement("p")
    descripcionVuelo.appendChild(fechaInicio1)
    let valorfechaP = document.createTextNode(fechaInicio)
    fechaInicio1.appendChild(valorfechaP)
/// fecha de inicio del vuelo
    let horaSalida1 = document.createElement("p")
    descripcionVuelo.appendChild(horaSalida1)
    let valorHoraSalida = document.createTextNode(horasalida)
    horaSalida1.appendChild(valorHoraSalida)
/// Hora salida 
    let fechaFin1 = document.createElement("p")
    descripcionVuelo.appendChild(fechaFin1)
    let valorfechafin1 = document.createTextNode(fechaFin)
    fechaFin1.appendChild(valorfechafin1)
/// fecha de llegada del vuelo
    let duracionVuelo1 = document.createElement("p")
    descripcionVuelo.appendChild(duracionVuelo1)
    let valorduracionVuelo = document.createTextNode(duracionVuelo)
    duracionVuelo1.appendChild(valorduracionVuelo)

    /* let destinoVuelo = createElement("div")
    vueloPrimero.appendChild(destinoVuelo) */
   

}

