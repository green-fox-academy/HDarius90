

'use strict';
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig

function sum(lastNumber) {
    let output = 0;
    for (let i = 0; i <= lastNumber; i++) {
        output = output + i;
    }
    return output;
}

console.log(sum(5));
