"use strict";

var fs = require("fs");
var nb;
var bool;
var s;

fs.writeFileSync("test19_1",9,"utf-8");
nb = fs.readFileSync("test19_1","utf-8");

fs.writeFileSync("test19_2",7,"utf-8");
bool = fs.readFileSync("test19_2","utf-8");

fs.writeFileSync("test19_3","Bonsoir !","utf-8");
s = fs.readFileSync("test19_3","utf-8");

console.log("Valeur number : "+nb);
console.log("Valeur boolean : " + bool);
console.log("Valeur string : " + s);

console.log(nb*bool);
