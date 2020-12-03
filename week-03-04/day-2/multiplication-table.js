'use strict';

const number = 15;

// Írj egy programot, ami
// kiírja a number változóban megadott számhoz a szorzótáblát
//
// Például, ha a number 15, akkor ezt írná ki:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

for(let i = 1; i <= 10; i++){
    console.log(i + " * " + number + " = "+i*number);
}