
'use strict';
// Hozz létre egy függvényt, ami megkap bemeneten egy számokból álló listát
// Visszadaja egy másik listát, ahol az első lista elemei rendezett emelkedő 
// Sorrendben szereplnek, készíts egy második paramétert, ami ha igaz 
// Csökkenő sorrendben adja vissza a listát

function bubble(arr) {

    return arr.sort((a, b) => a - b);

}

function advancedBubble(arr, isDescending) {
if(isDescending === true){
    return  arr.sort((a, b) => b - a);
}
return arr.sort((a, b) => a - b);
}

//  Példa:
console.log(bubble([43, 12, 24, 9, 5]))
//  ezt kéne kiírja: [5, 9, 12, 24, 34]
console.log(advancedBubble([43, 12, 24, 9, 5], true))
//  ezt kéne kiírja: [34, 24, 9, 5]

