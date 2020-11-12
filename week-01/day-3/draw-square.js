

'use strict';

const lineCount = 6;

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke
console.log('%%%%%%');
for(let i = 3; i <= lineCount; i++){
    console.log('%    %');
}
console.log('%%%%%%');