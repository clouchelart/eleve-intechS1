"use strict";

var reponse;
var bonbon;
var kbd;

kbd = require("kbd");

//console.log("Je veux un bonbon !!");
//reponse = kbd.getLineSync();

reponse = "cookie";
while (reponse !== "bonbon"){
console.log("Je veux un bonbon !!");
reponse = kbd.getLineSync();
}
console.log("Merci !");
