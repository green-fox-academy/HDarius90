

'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát

function factorio(number) {
    let n = 1;
    for (let i = 2; i <= number; i++) {
        n = n * i;
    }
    return n;
}
let number = 0;
console.log(factorio(number));