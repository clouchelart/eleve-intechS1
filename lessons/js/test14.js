"use strict";

var liste = [];
var i;

liste[0] = "Pain";
liste[1] = "jambon";
liste[2] = "lardon";
liste[3] = "Pizza";
liste[4] = "lasagnes";


//console.log(liste);
//console.log(liste[0]);
//console.log(liste.length);

liste[liste.length] = "fromages";

/*liste.splice(5,5);
liste.splice(2,0,"frites");*/

for (i = 0; i < liste.length;i++) {
console.log(liste[i]);
}

//console.log(liste);
