

'use strict';
// - Hozz létre egy `al` nevű változót és állítsd be az értékét `Green Fox`-ra
// - Hozz létre egy `greet` nevű függvényt, ami köszönti a bemeneti paraméterét
//     - A köszöntés legyen kiírás (logolás) pl.: `Szervusz, Green Fox`
//     - Készülj fel arra az esetre is, ha a bemeneti paramétert üresen hagyják!
// - `greet`-eld `al`-t

let al = `Green Fox`;

function greet(name=`idegen`) {
    console.log(`Szervusz, ${name}!`);
}

greet(al);