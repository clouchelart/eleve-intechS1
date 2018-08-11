"use strict";

var kbd;
var nbUser;

kbd=require("kbd");

console.log("Veuillez saisir un nombre entre 1 et 10");

process.stdout.write("Nombre: ");
nbUser=kbd.getLineSync();
nbUser=Number(nbUser);
console.log(nbUser);
