
const buttomMenu = document.querySelector('.fa-bars');
const buttomBusqueda = document.querySelector('.fa-magnifying-glass');
const menu = document.querySelector('.contenedorAbajo')
const contenido = document.querySelector('.contenido')
const busqueda = document.querySelector('.contentInput')
let mostrarBot = document.getElementById('bot');
const ocultarButton = document.getElementById('buttom');
let salirBot = document.getElementById('salir');
let sendButtom = document.getElementById('enviar');


buttomMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

buttomBusqueda.addEventListener('click', () => {
    busqueda.classList.toggle('buscar');
});

ocultarButton.addEventListener('click', buscar );

function buscar(){
    mostrarBot.classList.add("bot-visibleBot")
    mostrarBot.classList.remove("bot")
    ocultarButton.classList.add("buttom-verButtom")
    ocultarButton.classList.remove("buttom")
    contenido.classList.add('contenido-mostrar')
    contenido.classList.remove('contenido')
}

salirBot.addEventListener('click', );

function salir(){
    mostrarBot.classList.add("bot")
    mostrarBot.classList.remove("bot-visibleBot")
    ocultarButton.classList.add("buttom")
    ocultarButton.classList.remove("buttom-verButtom")
    contenido.classList.add('contenido')
    contenido.classList.remove('contenido-mostrar')
}

function limpiarFormulario(){
    let inputNombre = document.getElementById('Nombre').value = ""
    document.getElementById("Nombre").innerHTML = inputNombre

    let inputApellido = document.getElementById('Apellido').value = ""
    document.getElementById("Apellido").innerHTML = inputApellido

    let inputInquietud = document.getElementById('Inquietud').value = ""
    document.getElementById("Inquietud").innerHTML = inputInquietud

}

function evaluarInput(){
    let inputNombre = document.getElementById('Nombre').value.value 
    let inputApellido = document.getElementById('Apellido').value
    let inputInquietud = document.getElementById('Inquietud').value

    if( inputApellido == "" || inputNombre == ""  || inputInquietud == "" ){ 
        
        alert("ingrese el valor requerido")
    }else {
        limpiarFormulario()
    }
}




