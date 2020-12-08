

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáját. Majd húz
// egy volnalat abból a pontból a canvas középpontjáig.
// Rajzolj legalább három vonalat egy loop segítségével.

function goToCenter(cordX, cordY) { 
    ctx.beginPath();
    ctx.moveTo(cordX,cordY);
    ctx.lineTo(300, 200);
    ctx.stroke();
    ctx.closePath();
}

for(let i = 0; i < 400; i+=30){
    goToCenter(i,i);
}
