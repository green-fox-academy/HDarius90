const liGreenFox = document.createElement('li');
liGreenFox.textContent = 'The Green Fox';

const liLamplighter = document.createElement('li');
liLamplighter.textContent = 'The Lamplighter';

const ulAsteroids = document.querySelector('.aszteroidák');
ulAsteroids.appendChild(liGreenFox);
ulAsteroids.appendChild(liLamplighter);

const h1 = document.createElement('h1');
h1.textContent = 'Tudok elemeket hozzáadni a DOM-hoz!';

const container = document.querySelector('.container');
container.appendChild(h1);

const img = document.createElement('img');
img.src = './image/citrom-900x900.jpg';
img.setAttribute('width', '300px');
container.appendChild(img);