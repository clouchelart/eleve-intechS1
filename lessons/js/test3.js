"use strict";

var nbJoueur;
var nbSecret;
var kbd;

kbd = require ("kbd");

nbSecret=8;

console.log("Trouvez le nombre entre 1 et 10");
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






/*if (nbJoueur === nbSecret){
	console.log("Tu as trouvé !");
}
}
else if(nbJoueur < nbSecret){
	console.log("Le nombre proposé est trop petit !");
}
else if(nbJoueur > nbSecret){
	console.log("Le nombre proposé est trop grand !");
}
*/
