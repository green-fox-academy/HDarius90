'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

let numbers = [1, 2, 3, 8, 5, 6];
const map = numbers.map(x => x/2);
numbers[3] = map [3];

console.log(numbers[3]);