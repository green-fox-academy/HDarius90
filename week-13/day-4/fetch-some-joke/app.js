'use strict';

const baseAPIUrl = 'http://api.icndb.com/jokes/random';
const p = document.querySelector('p');
const div = document.querySelector('div');


document.querySelector('button').addEventListener('click', () => {

  /* return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', baseAPIUrl);

    request.onload = () => {

      resolve(request.response);

    }
    request.send();
  }).then(data2 => {
    const joke = JSON.parse(data2);
    div.innerHTML += '<p>' + joke.value.joke + '</p>';
  })
    .catch(err => {
      console.log(err);
    });
 */


  fetch(baseAPIUrl)
    .then(response => response.json())
    .then(data => {
      div.innerHTML += '<p>' + data.value.joke + '</p>';
    })
    .catch(reject => console.log('Hiba: ' + reject.message));
});

