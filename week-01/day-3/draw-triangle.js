'use strict';

const lineCount = 4;

// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke

let line = "";

for(let i = 0; i <= lineCount;i++){
    console.log(line);
    line = line + "*";
}