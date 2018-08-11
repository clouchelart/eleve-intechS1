"use strict";
/*var A = 1;
  var B = 2;
  var C = 3;
  var D = 4;
  var E = 5;
  var F = 6;
  var G = 7;
  var H = 9;
  var I = 9;
  var i;

  for (i = 1; i <= 9; i++ ) {
  console.log(i+" ! "+A*i+" "+B*i+" "+C*i+" "+D*i+" "+E*i+" "+F*i+" "+G*i+" "+H*i+" "+I*i);
  }
 */

var i = 0;
var j = 0;
var nb = 9;
var resultat;

for(j = 1; j<= nb; j++) {

	for(i = 1; i<= nb; i++) {
		resultat = i * j;
		
		if (i === 1) {
			process.stdout.write(j + " !");
		}
		process.stdout.write(" " + resultat);
	}
	console.log();
}
