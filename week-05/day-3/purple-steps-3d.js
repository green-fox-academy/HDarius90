

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Reprodukáld ezt:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
let actualPosition = 10;
for (let i = 10; i <= 80; i += 10) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(actualPosition, actualPosition, i, i);
    actualPosition = actualPosition + i;
}