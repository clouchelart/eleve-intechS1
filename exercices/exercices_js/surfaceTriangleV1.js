// CALCUL DE LA SURFACE D'UN TRIANGLE - VERSION 1

"use strict";

var calculerSurfaceTriangle;
var baseTriangle;
var hauteurTriangle;
var surface;

// Fonction getTriangleArea

calculerSurfaceTriangle = function () {
	surface = (baseTriangle * hauteurTriangle) / 2;
	};

	// Utilisation de la fonction pour calculer la surface
	// de deux triangles

	baseTriangle = 4;
	hauteurTriangle = 3;
	calculerSurfaceTriangle();
	console.log("Surface du rectangle 1 : " + surface);

	baseTriangle = 10;
	hauteurTriangle = 5;
	calculerSurfaceTriangle();
	console.log("Surface du rectangle 2 : " + surface);
