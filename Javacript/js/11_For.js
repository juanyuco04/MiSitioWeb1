"use strict"

/* For */
for (var i = 1; i <= 10; i++){
    console.log(i);
}

/* primera forma de realizar el ejercicio */
var usuario = new Array();
usuario[0] = 1;
usuario[1] = "1078746185";
usuario[2] = "Roberto";
usuario[3] = "2002-11-11";
usuario[4] = "Cartagena";

for (var f = 0; f <= usuario.length-1; f++){
     console.log(usuario[f]);
}


/* segunda forma */

var usuario2 = new Array(2,"107635233", "Diego", "2003-05-25", "Medellin");

/* la tercera forma */

var usuario3 = [3,"107635233", "Lucas", "2003-05-25", "Choco"];

console.log("Nombre usuario 1:" + usuario[2]);
console.log("Nombre usuario 2:" + usuario2[2]);
console.log("Nombre usuario 3:" + usuario3[2]);

/* sistema de contar caracteres */

var mensajeUsuario = "El siatema no cuenta con las espectativas deseadas ";
var longitudMensajeUsuario = mensajeUsuario.length;
 if (longitudMensajeUsuario > 60){
     console.log("el mensaje es muy largo");
 }
 else if (longitudMensajeUsuario < 60){
     console.log("el mensaje fue recidido");
 }
 else {
     console.log("ha ocurrido una desgracia")
 }