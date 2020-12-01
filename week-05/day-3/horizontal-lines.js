

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// a vonal kezdőpontjának x és y koordinátáit, majd kirajzol
// egy 50 hosszú horizontális vonalat ebből a pontból.
// Rajzolj legalább 3 ilyen vonalat egy loop segítségével.

function drawline(cordX, cordY){
    ctx.beginPath();
    ctx.moveTo(cordX,cordY);
    ctx.lineTo(cordX+50, cordY);
    ctx.stroke();
    ctx.closePath();
}

for(let i = 1; i < 400;i+=20){
    drawline(i,i);
}