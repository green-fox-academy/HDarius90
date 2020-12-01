

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy négyzetet és egy paramétert vár:
// A négyzet méretét (egy oldal hossza)
// kirajzol egy ekkora négyzetet a canvas közepére.
// Rajzolj 3 négyzetet ezzel a függvénnyel.
// Kerüld a  kód duplikációt.

function drawSquare(size) {
    ctx.strokeRect(300 - size / 2, 200 - size / 2, size, size);
}

drawSquare(100);
drawSquare(10);
drawSquare(50);

/*
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0,0);
ctx.lineTo(600,400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0,400);
ctx.lineTo(600,0);
ctx.stroke();
ctx.closePath();
*/