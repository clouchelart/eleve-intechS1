//-----------------------------------------------------------------------------
// TRI QUICK SORT
//-----------------------------------------------------------------------------

"use strict";

var tri_quick = function (tab, gauche, droite) {

	var g;
	var d;
	var tampon;
	var val;

	if(droite <= gauche) {
		return tab;         
	}

	val = tab[droite];  
	g = gauche-1;
	d = droite;

	do {
		while (tab[++g] < val);

		while (tab[--d] > val);

		if (g < d)
		{
			tampon = tab[g];
			tab[g] = tab[d];
			tab[d] = tampon;
		}
	} while (g < d);

	tampon = tab[g];
	tab[g] = tab[droite];
	tab[droite] = tampon;
	tab = tri_quick(tab, gauche, g-1);
	tab = tri_quick(tab, g+1, droite);

	console.log (tab);
	return tab;
}

var tab = [3, 6, 7, 1, 8, 3, 4, 8, 1];
console.log (tab);

tab = tri_quick(tab, 0, tab.length-1);
console.log (tab);
