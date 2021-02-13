'use strict';

const baseAPIUrl = 'http://api.giphy.com/v1/gifs/trending';
const api_key = 'nCaVAEOdvfNMUB1QqgEBiDuhmzRBxpyR';
const url = `${baseAPIUrl}?api_key=${api_key}&limit=16`;


document.querySelector('button').addEventListener('click', () => {
  const response = fetch(url);
  response.then(response => response.json())
    .then(json => {
      //console.log(json.data);
      printGifs(json.data);
    })
    .catch(err => {
      console.log(err);
    });
});


function printGifs(gifArray) {
  const main = document.querySelector('main');

  gifArray.forEach(gif => {
    const img = document.createElement('img');
    img.setAttribute('src', gif.images['480w_still'].url);

    main.appendChild(img);
  });

}
