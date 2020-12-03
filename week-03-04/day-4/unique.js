'use strict';

// Hozz létre egy függvényt, ami kap egy számokból álló listát paraméterként
// Visszad egy számokból álló listát, ahol minden szám pontosan egyszer
// szerepel

function unique(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!(result.includes(numbers[i]))) {
            result.push(numbers[i]);
        }

    }

    return result;
}

//  Példa
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
//  ezt kéne kiírnia: `[1, 11, 34, 52, 61]`

