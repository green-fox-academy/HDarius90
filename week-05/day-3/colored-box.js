

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj egy négyzetet aminek minden oldala más színű.

function randomColor() {
    const colors = ['red', 'yellow', 'orange', 'blue', 'brown', 'pink', 'purple'];
    const randomNumber = Math.round((colors.length - 1) * Math.random());
    return colors[randomNumber];
}


ctx.beginPath();
ctx.strokeStyle = randomColor();
ctx.moveTo(50,50);
ctx.lineTo(100,50);
ctx.stroke();
ctx.strokeStyle = randomColor();
ctx.lineTo(100,100);
ctx.stroke();
ctx.strokeStyle = randomColor();
ctx.lineTo(50,100);
ctx.stroke();
ctx.strokeStyle = randomColor();
ctx.lineTo(50,50);
ctx.stroke();
ctx.closePath();