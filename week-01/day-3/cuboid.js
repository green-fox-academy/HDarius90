
'use strict';

// Írj egy programot, ami egy téglatest 3 oldalát tartalmazza változókban (floats)
// A program írja ki a felületét és térfogatát a testnek ilyen formátumban:
//
// Felület: 600
// Térfogat: 1000

let l = 2.5;
let w = 4.6;
let h = 7.2;

let sa = 2*(l*w+l*h+w*h);
let v = l*w*h;

console.log("Felület: " + sa);
console.log("Terület: " + v);

