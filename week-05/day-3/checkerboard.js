


'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
let secondLineMarker = false;
for (let j = 0; j <= 400; j += 50) {
    if (secondLineMarker === false) {
        for (let i = 0; i <= 600; i += 150) {
            ctx.fillRect(i, j, 75, 50);
            secondLineMarker = true;
        }
    } else {
        for (let i = 75; i <= 600; i += 150) {
            ctx.fillRect(i, j, 75, 50);
            secondLineMarker = false;
        }

    }
}


// NE NYÚLJ A FENTI KÓDHOZ

// Töltsd ki a canvast sakktábla mintával.

