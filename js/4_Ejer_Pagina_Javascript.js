 
 /* const fila = document.querySelector('.contenedor-coursel');
const pelicula = document.querySelector('img'); */

// let fechaDerecha = document.getElementById('fecha_derecha');
// let fechaIzquierda = document.getElementById('fecha_iquierda');

// fechaDerecha.addEventListener('click', () => {
//     fila.scrollLeft += fila.offsetWidth;
// })


// function fechaDerecha (){
//     alert("llegando")
/* function fechaDerecha() {
    document.getElementById('fechaDerecha').fila.scrollLeft += fila.offsetWidth
} */

// }

function cambiarImagen (){
    let imagen = document.getElementById("imagen_Principal");
    imagen.style.backgroundImage = "url('img/Interstellar1.jpg')";
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Interstellar ";
    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar."

}
function cambiarImagen2 (){
    let imagen = document.getElementById("imagen_Principal");
    imagen.style.backgroundImage = "url('img/Alerta_Roja1.jpg')"
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Alerta roja";
    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Cuando la Interpol envía una Alerta roja, significa que los departamentos de Policía de todo el mundo deben estar alerta para capturar a los criminales más buscados. Todas las alarmas saltan cuando un temerario robo une al mejor agente del FBI (Johnson) con dos criminales rivales entre sí (Gadot & Reynolds). Una coincidencia que hará que suceda lo impredecible."

}
function cambiarImagen3 (){
    let imagen = document.getElementById("imagen_Principal");
    imagen.style.backgroundImage = "url('img/Las_Aventuras.jpg')"
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Las aventuras de Buck";
    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Continúa contando las hilarantes aventuras de uno de los mamíferos favoritos de la prehistoria. Tras un distanciamiento con su hermana mayor, Ellie, los hermanos Crash y Eddie parten a la búsqueda de un lugar propio, pero rápidamente acaban atrapados en una caverna subterránea. El aventurero Buck Wild acudirá a su rescate y juntos, tendrán que enfrentarse a los dinosaurios del Mundo Perdido."

}
function cambiarImagen4 (){
    let imagen = document.getElementById("imagen_Principal");
    imagen.style.backgroundImage = "url('img/Peaky.jpg')"
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Peaky Blinders";
    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Es justamente aquí donde una familia de gánsteres irlandeses de origen nómada (a veces llamados gitanos o chatarreros) asentada en Birmingham (los Peaky Blinders) justo después de la Primera Guerra Mundial, dirigen un local de apuestas hípicas en la ciudad. Las acciones del ambicioso, respetado, temerario y peligroso jefe de la banda, Thomas Shelby."

}
function cambiarImagen5 (){
    let imagen = document.getElementById("imagen_Principal");
    imagen.style.backgroundImage = "url('img/scream.jpg')"
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Scream 4";
    let parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "Sidney Prescott ha logrado olvidar los asesinatos cometidos en Woodsboro. Diez años después, convertida en una escritora de éxito, vuelve a su pueblo natal con motivo de la gira de promoción de su nuevo libro. Pero su regreso irá acompañado de una nueva ola de crímenes perpetrados por un viejo conocido: Ghostface."

}