"use strict";

var kbd = require("kbd");
var reponse;
var gagne;
var min;
var max;
var prop;

min = 1;
max = 10;

console.log("Pensez à  un nombre entre 1 et 10, je vais essayer de le trouver");
console.log("A chaque fois que je propose un nombre, répondez moi : ");
console.log("+ si le nombre auquel vous pensez est plus grand");
console.log("- si le nombre auquel vous pensez est plus petit");
console.log("= si j'ai trouvé");

gagne = "non";

do {
	console.log(min + " / " + max);
	prop = Math.round(Math.random() * (max-min));
	prop = min + prop;

	process.stdout.write(prop + " ? ");
	reponse = kbd.getLineSync();

	if(reponse === "+") {
		min = prop + 1;
	} else if (reponse === "-") {
		max = prop + 1;
	} else if (reponse === "=") {
		console.log("j'ai gagné !");
		gagne = "oui";
	} else {
		console.log("???");
	}
} while (gagne === "non");
