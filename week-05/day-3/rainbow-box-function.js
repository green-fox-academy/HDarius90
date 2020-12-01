

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy négyzet rajzoló függvényt ami két paramétert vár:
// A négyzet méretét és a kitöltés színét, majd kirajzol
// egy ilyen színű és méretű négyzetet a canvas közepére.
// Készíts egy loop-ot, ami kitölti a canvast szívárványszínű négyzetekkel
// (piros, narancs, sárga, zöld, kék, indigó, ibolya)

function drawSquare(size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(300 - size / 2, 200 - size / 2, size, size);
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorcounter = 0;
for (let i = 400; i > 1; i -= 20) {

    drawSquare(i, colors[colorcounter]);
    if (colorcounter == colors.length - 1) {
        colorcounter = 0;
    } else {
        colorcounter = colorcounter + 1;
    }
}


