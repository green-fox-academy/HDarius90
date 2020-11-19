'use strict';

//  Hozz létre egy függvény, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
//  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt

// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: '[]'

module.exports = subint;

function subint (number, array) {
    let index = [];
    for( let i = 0; i < array.length; i++){
        if(array[i].toString().split("").includes(number.toString())){
            index.push(i);

        }
    }
    return index;
}


