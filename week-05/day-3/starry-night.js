

'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

function randomColor() {
    const colors = ['grey', 'darkgrey', 'lightgrey', 'silver', 'gainsboro'];
    const randomNumber = Math.round((colors.length - 1) * Math.random());
    return colors[randomNumber];
}


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 600, 400);


for(let i = 0; i < 100;i++){
   ctx.fillStyle = randomColor();
ctx.fillRect(Math.random()*600, Math.random()*400, 5, 5); 
}



