"use strict";

var reponse1;
var reponse2;
var kbd;

kbd = require("kbd");
reponse1 = "14 Juillet";

do{
console.log("Quel est le jour de la fête national en France ?")
reponse2 = kbd.getLineSync();
if(reponse1 === reponse2){
console.log("Bravo !")
}
else if(reponse1 !== reponse2){
console.log("Réponse incorect ! LA réponse commence par 14 et fini par Juillet ! recommencer maintenant.")
}
}
while (reponse1 !== reponse2);
