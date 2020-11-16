

'use strict';

const lineCount = 6;


// Írj egy programot, ami rajzol
// egy olyan négyzetet, mint ez:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

let line = "%%%%%";
let newLine =  "%   %";

console.log(line);
let i = 1;
for (let i = 1; i <= lineCount - 2; i++); {
    newLine[i] = '%';
    console.log(newLine);
    newLine[i] = ' ';
}
console.log(line);
