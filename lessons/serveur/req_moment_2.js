"use strict";

var fs = require("fs");
var remedial = require("remedial");
var moment = require("moment");

var trait = function(req,res,query) {

	var ressource;
	var marqueurs;

	ressource = fs.readFileSync("page_moment_2.html", "utf-8");

	marqueurs = {};

	moment.locale('fr');

	marqueurs["heure"] = moment().format('H:mm:ss');
	marqueurs["date"] = moment().format('dddd Do MMMM');
	ressource = ressource.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(ressource);
	res.end();
}

module.exports = trait;
