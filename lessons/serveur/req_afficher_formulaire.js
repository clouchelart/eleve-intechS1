"use strict";

var fs = require("fs");

var trait = function(req, res,query) {

	var ressource;
	
	ressource = fs.readFileSync("page_formulaire.html", "utf-8");

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(ressource);
	res.end();
}

module.exports = trait;
