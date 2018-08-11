"use strict";

var kbd = require("kbd");
var nb;
var resultat;

process.stdout.write("n ?");
nb = kbd.getLineSync();
nb = Number(nb);
do{
	resultat = nb%2;
	if(resultat  === 0){
		nb = nb/2;
		console.log(nb);
	}
	else { 
		nb = (nb*3)+1;
		console.log(nb);
	}
} while(nb !==1);
