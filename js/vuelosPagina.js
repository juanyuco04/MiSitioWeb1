
class vuelosDatos {
    constructor(codigoVuelo1, precio, origenVuelo, fechaInicio, horasalida, imagen, duracionVuelo, fechaFin, horaLlegada, destinoVuelo ){
    this.codigoVuelo1 = codigoVuelo1;
    this.precio = precio;
    this.origenVuelo = origenVuelo;
    this.fechaInicio = fechaInicio;
    this.horasalida = horasalida;
    this.imagen = imagen
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
    "imagen" : "img/VuelosWingo.png",
    "duracionVuelo" : "1 Hora(s) 30 Minutos(s)",
    "fechaFin": "viernes 08 Abril",
    "horaLlegada" : "llegada 08:54 PM",
    "destinoVuelo" : "San Andres",
},{
    "codigoVuelo1": "P5-7257",
    "precio" : "$ 248.999",
    "origenVuelo" : "Cali",
    "fechaInicio": "viernes 15 Abril",
    "horasalida" : "Salida 03:36 PM", 
    "imagen" : "img/VuelosWingo.png",
    "duracionVuelo" : "0 Hora(s) 59 Minutos(s)",
    "fechaFin": "viernes 15 Abril",
    "horaLlegada" : "llegada 04:34 PM",
    "destinoVuelo" : "Bogotá", 
},{
    "codigoVuelo1": "P7-7287",
    "precio" : "$230.999",
    "origenVuelo" : "Santa Marta",
    "fechaInicio": "Martes 19 Abril",
    "horasalida" : "Salida 12:30 PM", 
    "imagen" : "img/VuelosWingo.png",
    "duracionVuelo" : "1 Hora(s) 30 Minutos(s)",
    "fechaFin": "Martes 19 Abril",
    "horaLlegada" : "llegada 02:00 PM",
    "destinoVuelo" : "Bogotá",
}];

function mostrarVuelos() {
    cargarVuelos(vuelo[0].codigoVuelo1,  vuelo[0].precio, vuelo[0].origenVuelo, vuelo[0].fechaInicio,  vuelo[0].horasalida, vuelo[0].imagen, vuelo[0].duracionVuelo, vuelo[0].fechaFin,  vuelo[0].horaLlegada, vuelo[0].destinoVuelo);
    cargarVuelos(vuelo[1].codigoVuelo1,  vuelo[1].precio, vuelo[1].origenVuelo, vuelo[1].fechaInicio,  vuelo[1].horasalida, vuelo[1].imagen, vuelo[1].duracionVuelo, vuelo[1].fechaFin,  vuelo[1].horaLlegada, vuelo[1].destinoVuelo);
    cargarVuelos(vuelo[2].codigoVuelo1,  vuelo[2].precio, vuelo[2].origenVuelo, vuelo[2].fechaInicio,  vuelo[2].horasalida, vuelo[2].imagen, vuelo[2].duracionVuelo, vuelo[2].fechaFin,  vuelo[2].horaLlegada, vuelo[2].destinoVuelo);
}

function cargarVuelos(codigoVuelo1, precio, origenVuelo, fechaInicio,  horasalida, imagen, duracionVuelo, fechaFin, horaLlegada, destinoVuelo){
 /*    alert("hola") */
    let contendorVuelos = document.getElementById("vuelos")
    let mainContent = document.createElement("div")
    contendorVuelos.appendChild(mainContent)
    mainContent.setAttribute("class", "mainContent")
    let vueloPrimero = document.createElement("div")
    mainContent.appendChild(vueloPrimero)
    vueloPrimero.setAttribute("class", "mainContent2")
    /* creamos el primer contenedor */
    let codigoVuelo = document.createElement("div")
    mainContent.appendChild(codigoVuelo)
    codigoVuelo.setAttribute("class", "codigoContent")


    let numeroVuelo = document.createElement("span")
    codigoVuelo.appendChild(numeroVuelo)
    let spanvalor = document.createTextNode(codigoVuelo1)
    numeroVuelo.appendChild(spanvalor) 
    numeroVuelo.setAttribute("class", "codigoVuelo")

    let precioVuelo = document.createElement("label")
    codigoVuelo.appendChild(precioVuelo)
    let valorVuelo = document.createTextNode(precio);
    precioVuelo.appendChild(valorVuelo)
    precioVuelo.setAttribute("class", "precioVuelo")

 /* crreamos el primer contenedor que va en la parte superior con el codigo y el precio */

    let inicioVuelo = document.createElement("div")
    vueloPrimero.appendChild(inicioVuelo)
    inicioVuelo.setAttribute("class", "inicioContent")
    let parrafoOrigen = document.createElement("p")
    inicioVuelo.appendChild(parrafoOrigen)
    let InicioVueloP = document.createTextNode(origenVuelo)
    parrafoOrigen.appendChild(InicioVueloP) 
/// origen del vuelo 
    let descripcionVuelo = document.createElement("div")
    vueloPrimero.appendChild(descripcionVuelo)
    descripcionVuelo.setAttribute("class", "descripcionContent")
    let fechaHoraInicio = document.createElement("div")
    descripcionVuelo.appendChild(fechaHoraInicio)
    fechaHoraInicio.setAttribute("class", "fechaHoraInicio")
    let fechaInicio1 = document.createElement("p")
    fechaHoraInicio.appendChild(fechaInicio1)
    let valorfechaP = document.createTextNode(fechaInicio)
    fechaInicio1.appendChild(valorfechaP) 
    fechaInicio1.setAttribute("class", "salidadLegadaFecha")
/// fecha de inicio del vuelo
    let horaSalida1 = document.createElement("p")
    fechaHoraInicio.appendChild(horaSalida1)
    let valorHoraSalida = document.createTextNode(horasalida)
    horaSalida1.appendChild(valorHoraSalida)
    horaSalida1.setAttribute("class", "horaSalidadLlegada")
/// Hora salida 
    let fechaHorafinal = document.createElement("div")
    descripcionVuelo.appendChild(fechaHorafinal)
    fechaHorafinal.setAttribute("class", "fechaHorafinal")
    let fechaFin1 = document.createElement("p")
    fechaHorafinal.appendChild(fechaFin1)
    let valorfechafin1 = document.createTextNode(fechaFin)
    fechaFin1.appendChild(valorfechafin1) 
    fechaFin1.setAttribute("class", "salidadLegadaFecha")
/// fecha de llegada del vuelo
    let horaLegadaP = document.createElement("p")
    fechaHorafinal.appendChild(horaLegadaP)
    let horaLegadaNode = document.createTextNode(horaLlegada)
    horaLegadaP.appendChild(horaLegadaNode) 
    horaLegadaP.setAttribute("class", "horaSalidadLlegada")
    //////
    let duracionContent = document.createElement("div")
    descripcionVuelo.appendChild(duracionContent)
    duracionContent.setAttribute("class", "duracionVuelo")
    let imagenVuelos = document.createElement("img")
    duracionContent.appendChild(imagenVuelos)
    imagenVuelos.setAttribute("src", imagen)
    imagenVuelos.setAttribute("class", "imagenVuelos")
    let duracionVuelo1 = document.createElement("p")
    duracionContent.appendChild(duracionVuelo1)
    let valorduracionVuelo = document.createTextNode(duracionVuelo)
    duracionVuelo1.appendChild(valorduracionVuelo)
    duracionVuelo1.setAttribute("class", "duracionVuelo") 
/// duracion del vuelo

/// hora de llegada del vuelo
    let destinoVueloD = document.createElement("div")
    vueloPrimero.appendChild(destinoVueloD)
    destinoVueloD.setAttribute("class", "destinoContent")

    let destinoVueloP = document.createElement("p")
    destinoVueloD.appendChild(destinoVueloP)
    let destinoVueloPNode = document.createTextNode(destinoVuelo)
    destinoVueloP.appendChild(destinoVueloPNode) 
/// destino del vuelo
    
}

window.onload = function(){
    mostrarVuelos();
};

