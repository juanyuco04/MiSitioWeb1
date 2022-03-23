/* let contenedorPrincipal = ""; */

class Automovil {
    constructor(marca, modelo, precio, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio; 
        this.imagen = imagen;

    }
}

let auto = new Automovil("Ferrari", " 488 GTB",    "987000000", "img/ferrari.jpg");
let auto2 = new Automovil("Ford",   " F-150",      "253000000", "img/Ford_F-150.jpg");
let auto3 = new Automovil("Ford",   " Fusion 2.0", "156000000", "img/Fusion 2.0.jpg");
let auto4 = new Automovil("Ford",   " scape",      "120000000", "img/Ford Scape.jpg");
let auto5 = new Automovil("Ford",   " Explore",    "187000000", "img/Ford Explore.jpg");

/*   contenedorPrincipal.setAttribute("id", "contentCarro")

  function validarCarro (){
      if(!document.getElementById("contentCarro")){
          mostrarVeiculo()
      }
  } */

function mostrarVeiculo(auto){
    let contenedorPrincipal = document.getElementById("main_content")
    let contenedorAuto = document.createElement("div")
    contenedorPrincipal.appendChild(contenedorAuto)
    contenedorPrincipal.setAttribute("class", "main-content" )
    contenedorAuto.setAttribute("class", "content_producto")

    let marcale = document.createElement("label")
    contenedorAuto.appendChild(marcale);
    let marcatext = document.createTextNode(auto.marca )
    marcale.appendChild(marcatext) 
    marcale.setAttribute("class", "marca_carro")

    let modelolabel = document.createElement("label")
    contenedorAuto.appendChild(modelolabel)
    let modelotxt = document.createTextNode(auto.modelo)
    modelolabel.appendChild(modelotxt)
    modelolabel.setAttribute("class", "modelo_carro")

    let preciolabel = document.createElement("label")
    contenedorAuto.appendChild(preciolabel)
    let preciotxt = document.createTextNode(auto.precio)
    preciolabel.appendChild(preciotxt)
    preciolabel.setAttribute("class", "precio_carro")

    let imagenAuto = document.createElement("img")
    contenedorAuto.appendChild(imagenAuto)
    imagenAuto.setAttribute("src", auto.imagen)
    imagenAuto.setAttribute("class", "imagen_carro")

}
function LimpiarVentana() {
    document.getElementById("main_content").innerHTML=" ";
}

/* function mostrarVeiculo(auto2){
    let contenedorPrincipal = document.getElementById("main_content")
    let contenedorAuto = document.createElement("div")
    contenedorPrincipal.appendChild(contenedorAuto)

    let marcale = document.createElement("label")
    contenedorAuto.appendChild(marcale);
    let marcatext = document.createTextNode(auto2.marca )
    marcale.appendChild(marcatext) 

    let modelolabel = document.createElement("label")
    contenedorAuto.appendChild(modelolabel)
    let modelotxt = document.createTextNode(auto2.modelo)
    modelolabel.appendChild(modelotxt)

    let preciolabel = document.createElement("label")
    contenedorAuto.appendChild(preciolabel)
    let preciotxt = document.createTextNode(auto2.precio)
    preciolabel.appendChild(preciotxt)

    let imagenAuto = document.createElement("img")
    contenedorAuto.appendChild(imagenAuto)
    imagenAuto.setAttribute("src", auto2.imagen)

} */


window.addEventListener("keydown", function(event){
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter"){
        LimpiarVentana()
        if (busqueda == "Ford"){
             mostrarVeiculo(auto5);
             mostrarVeiculo(auto2);
             mostrarVeiculo(auto3);
             mostrarVeiculo(auto4);
             alert("hola")
        }
        else if (busqueda == "Ferrari"){
            mostrarVeiculo(auto);
        }
        else {
            alert("No se encuentra resultado para su busqueda")
        }
    }
});