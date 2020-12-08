

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 760;
canvas.height = 880;

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold be a canvas átlóit
// Amelyik a bal felső sarokból indul, az legyen zöld, a másik piros.

ctx.beginPath();
ctx.strokeStyle = 'green'; 
ctx.moveTo(0,0);
ctx.lineTo(760,880);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red'; 
ctx.moveTo(0,880);
ctx.lineTo(760,0);
ctx.stroke();
ctx.closePath();
