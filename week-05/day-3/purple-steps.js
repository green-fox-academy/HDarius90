

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Reprodukáld ezt:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

for(let i = 0; i <= 200; i+=10){
    ctx.fillStyle = 'purple';
    ctx.fillRect(i,i,10,10);
}
