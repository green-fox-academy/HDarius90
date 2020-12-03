'use strict';
const lineCount = 4;

// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke


let line = "";
let numberOfStars = "*";
for (let i = 0; i <= lineCount; i++) {
    
    for (let j = lineCount; j >= i; j--) {
        line= line + " ";
    }
    

    line = line + numberOfStars;
    numberOfStars = numberOfStars + "**";
    console.log(line);
    line = "";
}

