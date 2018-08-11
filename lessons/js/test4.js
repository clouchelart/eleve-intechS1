"use strict";

var nombre;
var kbd;

kbd = require("kbd");

do{
process.stdout.write("Saisir un nombre.");
nombre = kbd.getLineSync();
nombre = Number(nombre);
if (nombre > 100){
console.log("Vous avez gagné !")
}
}
while(nombre < 100);
