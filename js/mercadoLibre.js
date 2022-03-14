
class Automovil {
    constructor(marca, modelo, precio, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio; 
        this.imagen = imagen;

    }
}

let auto = new Automovil("Ferrari", " 488 GTB", "987000000", "img/ferrari.jpg");

function validarObjeto(){

    alert(auto.marca + "" + auto.modelo + "" + "el mejor automovil de la historia")
    mostrarVeiculo();
} 

function mostrarVeiculo(){
    let contenedorPrincipal = document.getElementById("main_content")
    let contenedorAuto = document.createElement("div")
    contenedorPrincipal.appendChild(contenedorAuto)

    let marcale = document.createElement("label")
    contenedorAuto.appendChild(marcale);
    let marcatext = document.createTextNode(auto.marca)
    marcale.appendChild(marcatext) 

    let modelolabel = document.createElement("label")
    contenedorAuto.appendChild(modelolabel)
    let modelotxt = document.createTextNode(auto.modelo)
    modelolabel.appendChild(modelotxt)

    let preciolabel = document.createElement("label")
    contenedorAuto.appendChild(preciolabel)
    let preciotxt = document.createTextNode(auto.precio)
    preciolabel.appendChild(preciotxt)

    let imagenAuto = document.createElement("img")
    contenedorAuto.appendChild(imagenAuto)
    imagenAuto.setAttribute("src", auto.imagen )

}