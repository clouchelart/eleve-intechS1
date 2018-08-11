//-----------------------------------------------------------------------------
// TRI PAR SELECTION
//-----------------------------------------------------------------------------

"use strict";

var tri_selection = function (tab) {
	var continuer;
	var tmp;
	var pp;    // plus petit
	var i;
	var j;

	for(i=0; i<tab.length; i++)
	{
		pp = i; 

		for(j=i+1; j<tab.length; j++)
		{
			if (tab[j] < tab[pp])
			{
				pp = j;         
			}
		}

		tmp = tab[i];        
		tab[i] = tab[pp];        
		tab[pp] = tmp;

	}
	return tab;
}

var tab = [3, 6, 7, 1, 8, 3, 4, 8, 1];
console.log (tab);

tab = tri_selection(tab);
console.log (tab);

