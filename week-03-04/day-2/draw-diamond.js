

'use strict';

const lineCount = 7;


// Írj egy programot, ami rajzol egy
// olyan rombuszt, mint ez:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// A rombusznak annyi sora legyen, mint a lineCount értéke

let line = "";
let numberOfStars = "*";
for (let i = 0; i <= lineCount/2; i++) {
    
    for (let j = lineCount/2; j >= i; j--) {
        line= line + " ";
    }
    

    line = line + numberOfStars;
    numberOfStars = numberOfStars + "**";
    console.log(line);
    line = "";
}
numberOfStars = '*';
let numberOfSpace = ' ';

for (let c = 1; c <= lineCount/2; c++) {
    numberOfStars = '*';
    for (let d = lineCount/2-1; d >= c; d--) {

        
        numberOfStars = numberOfStars + "**";
    }
    numberOfSpace= numberOfSpace + " ";
    line = numberOfSpace + numberOfStars;
    numberOfStars = "";
    console.log(line);
    line = "";

}