
'use strict';

/* A kiadásainkat egy számokat tartalmazó listával fogjuk reprezentálni.

    Készíts egy listát az alábbi elemekkel:
        500, 1000, 1250, 175, 800 és 120

    Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
        Mennyit költöttünk?
        Melyik volt a legnagyobb kiadásunk?
        Melyik volt a legkisebb kiadásunk?
        Mennyi volt az átlag kiadásunk?
 */

 const expense = [500, 1000, 1250, 175, 800, 120];

 function sumExpense (numbers) {
     let sum = 0;
     for( let i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
     }
     return sum;
 }

 function maxExpense (numbers) {
    let max = 0;
    for( let i = 0; i < numbers.length; i++ ) {
       if( numbers[i] > max) {
           max = numbers[i];
       }
    }
    return max;
}

function minExpense (numbers) {
    let min = numbers[0];
    for( let i = 0; i < numbers.length; i++ ) {
       if( numbers[i] < min) {
           min = numbers[i];
       }
    }
    return min;
}

 console.log('sum = ' + sumExpense(expense));
 console.log('max = ' + maxExpense(expense));
 console.log('min = ' + minExpense(expense));
 console.log('átlag = ' + sumExpense(expense)/expense.length);