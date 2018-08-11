"use strict";

var kbd = require("kbd")
var fs = require("fs");
var vehicule = {};
var listeVehicules = [];
var listeVehiculesJSON;
var nbVoitures;
var i;

vehicule.marque;
vehicule.couleur;

console.log("Combien de voiture voulez vous enregister ?")
nbVoitures = kbd.getLineSync();
nbVoitures = Number(nbVoitures);

for (i=0;i<nbVoitures;i++){
	console.log("Qu\'elle est la marque de la voiture ?");
	vehicule.marque = kbd.getLineSync();
	console.log("Qu\'elle est la couleur de la voiture ?");
	vehicule.couleur = kbd.getLineSync();
	
	listeVehicules[i] = vehicule;
}

listeVehiculesJSON = JSON.stringify(listeVehicules);
fs.writeFileSync("listeVehicules",listeVehiculesJSON,"utf-8");
