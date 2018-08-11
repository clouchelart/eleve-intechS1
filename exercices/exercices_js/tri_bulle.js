// ----------------------------------------------------------------------------
// TRI A BULLE
// ----------------------------------------------------------------------------

"use strict";

var tri_bulle = function (tab) {
	var continuer;
	var tmp;
	var i;
	var j;

	j = tab.length;

	do {
		continuer = 0;
		for (i=0; i<j-1; i++) {
			if (tab [i] > tab [i+1]) {
				tmp = tab [i];
					tab [i] = tab [i+1];
					tab [i+1] = tmp;
					continuer = 1;
			}
		}
		j = j-1;
	} while (continuer);
	return tab;
}
var tab = [3, 6, 7, 1, 8, 3, 4, 8, 1];
console.log (tab);

tab = tri_bulle(tab);
console.log (tab);

var tab = [2, 7, 9, 1, 6, 5, 3, 0, 2, 1, 6, 3, 8, 4, 5, 9, 8, 3, 2, 6];
console.log (tab);

tab = tri_bulle(tab);
console.log (tab);
