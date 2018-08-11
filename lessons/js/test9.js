"use strict";

var direBonjour;
var name;
var kbd;

kbd = require("kbd");
console.log("Comment vous appelez vous ?");
name = kbd.getLineSync();

direBonjour = function () {
	console.log("Bonjour " + name);
};

direBonjour();
