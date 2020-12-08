

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawFromArray(arrayOfCords) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(arrayOfCords[0][0], arrayOfCords[0][1]);
    for (let i = 1; i < arrayOfCords.length; i++) {
        ctx.lineTo(arrayOfCords[i][0], arrayOfCords[i][1]);
    }
    ctx.stroke();
    ctx.closePath();
}

drawFromArray([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]);


// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

