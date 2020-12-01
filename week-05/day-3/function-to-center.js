

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');





// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.
function drawLine(startX, startY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(300, 200);
    ctx.stroke();
    ctx.closePath();

    for(let i = 0; i <= 600; i+=20){
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(i, 0);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(0, i);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(600, i);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(i, 400);
        ctx.stroke();
        ctx.closePath();
    }
}
drawLine(100, 150);


