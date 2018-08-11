// give me a cookie 

"use strict";

var kbd = require ("kbd"); // objet clavier
var phrase;

do {
	console.log("Je veux un bonbon ! ");
	phrase = kbd.getLineSync();
}
while (phrase !== "bonbon");

console.log(" Merci !! ");

