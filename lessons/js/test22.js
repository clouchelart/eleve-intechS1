"use strict";

var fs = require("fs");

try{
	fs.readFileSync("bonjour","utf-8");
}
catch(e){
	console.log("Le fichier bonjour n\'existe pas !");
}
