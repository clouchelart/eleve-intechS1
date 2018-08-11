// PROGRAMME DE TEST/DEMO kbd

"use strict";

var kbd = require('kbd');
var nom;

process.stdout.write("Comment t'appelles-tu ? ");
nom = kbd.getLineSync();

console.log("Bonjour " + nom);
