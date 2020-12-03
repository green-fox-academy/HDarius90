'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét


const numbers = [3, 4, 5, 6, 7];
let j = 0;
let tmp = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    tmp[j] = numbers[i];
    j++;
}
console.log(tmp);

