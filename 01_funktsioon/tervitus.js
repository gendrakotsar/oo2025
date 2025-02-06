"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eesnimi = "Juku";
var vanus = 32;
console.log("abc");
console.log("Tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    if (vanus < 16) {
        console.log("Osta lapsepilet");
    }
    else {
        console.log("Osta täispilet");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
