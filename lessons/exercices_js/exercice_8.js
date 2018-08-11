"use strict";

var kbd;
var nb_ordi = 0;
var rep_uti;
var min;
var max;

function nombreAleatoire(min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Pensez à un nombre entre 1 et 10, je vais essayer de le trouver");
console.log("A chaque fois que je propose un nombre, répondez moi :");
console.log("+ si le nombre auquel vous pensez est plus grand");
console.log("- si le nombre auquel vous pensez est plus petit");
console.log("= si j'ai trouvé");

kbd = require("kbd");

min = 1;
max = 10;

do {
	nb_ordi = nombreAleatoire(min,max);
	process.stdout.write(""+nb_ordi+" ");

	rep_uti = kbd.getLineSync();

	if(rep_uti === "+") {
		min = nb_ordi + 1;
	}
	else if(rep_uti === "-") {
		max = nb_ordi - 1;
	}
	else if(rep_uti === "=") {
		console.log("J'ai trouvé !")
	}

}
while(rep_uti !== "=")
