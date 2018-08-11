"use strict";

var direBonjour2;
var name;
var kbd;

kbd = require("kbd");
console.log("Comment vous appelez vous ?");
name = kbd.getLineSync();
direBonjour2 =function (nom){
console.log("Bonjour "+nom);
};

direBonjour2 (name);
