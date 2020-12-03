

'use strict';

// Írj egy programot, ami kiszámítja 1-től egy megadott számig
// a számok összegét és átlagát
//
// Például:
// Megadott szám: 5
// Kimenet: Összeg: 15, átlag: 3

let a = 5;
let sum = 0;
let avarage = 0;
for(let i = 1; i <= a;i++){
    sum = sum + i;
}
avarage = sum/a;
console.log(`Megadott szám: ${a}`);
console.log(`Kimenet: Összeg ${sum}, átlag: ${avarage}`);