'use strict';

const baseAPIUrl = 'https://swapi.dev/api/peoples/';

const getData = function (url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      resolve(request.response);
    }
    request.onerror = () => {
      reject(request.statusText);
    }
    request.send();
  });
};


document.querySelector('button').addEventListener('click', () => {
  getData(baseAPIUrl).then(response => {
    console.log(JSON.parse(response));
  }).catch(reject => {
    console.log(reject.message);
  });
});
