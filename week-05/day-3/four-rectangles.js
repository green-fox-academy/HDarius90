

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj nég különböző méretű és színű négyszöget
// Kerüld a kód duplikációt

function randomColor() {
    const colors = ['green', 'black', 'lightgrey', 'blue', 'orange', 'red'];
    const randomNumber = Math.round((colors.length - 1) * Math.random());
    return colors[randomNumber];
}

for (let i = 0; i < 4; i++) {
    ctx.fillStyle = randomColor();
    ctx.fillRect(Math.random() * 600, Math.random() * 400, Math.random() * 150, Math.random() * 180);
}