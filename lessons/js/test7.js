"use strict";

var nbJoueur;
var nbSecret;
var kbd;
var i;
var direBonjour;

kbd = require("kbd")

nbSecret = 2;

console.log("Trouvez le nombre secret entre 1 et 10");

for(i = 0; i<5; i++){
do {
	process.stdout.write("Quel nombre proposez vous ?");
	nbJoueur = kbd.getLineSync();
	nbJoueur = Number(nbJoueur);
	if (nbJoueur === nbSecret){
		console.log("Tu as trouvé !");
	}
	else if(nbJoueur < nbSecret){
		console.log("Le nombre proposé est trop petit !");
	}
	else if(nbJoueur > nbSecret){
		console.log("Le nombre proposé est trop grand !");
	}

}
while(nbJoueur !== nbSecret);
}
