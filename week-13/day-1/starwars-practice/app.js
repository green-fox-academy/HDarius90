'use strict';

const baseAPIUrl = 'https://swapi.dev/api/';

const leftList = document.querySelector('.left');
const rightList = document.querySelector('.right');

document.querySelector('button').addEventListener('click', () => {
  const searchName = document.getElementById('search-character').value;

  sendRequest('GET', `${baseAPIUrl}people/?search=${searchName}`, null, (response) => {

    const data = response.results;
    const ul = document.createElement('ul');

    data.forEach(person => {
      const li = document.createElement('li');
      li.textContent = person.name;
      li.addEventListener("click", (e) => {
        getFilmsByCharacter(e.currentTarget.textContent);
      });
      ul.appendChild(li);
    });
    leftList.appendChild(ul);

  });
});

function getFilmsByCharacter(name) {

  const ul = document.createElement('ul');

  sendRequest('GET', `${baseAPIUrl}people/`, null, (response) => {
    const data = response.results;
    data.forEach(person => {

      if (person.name === name) {
        console.log(person.url, name);


        sendRequest('GET', person.url, null, (data) => {
          const filmLinksByCharacter = data.films;
          filmLinksByCharacter.forEach(filmLink => {
            sendRequest('GET', filmLink, null, (film) => {
              const li = document.createElement('li');
              li.textContent = film.title;

              ul.appendChild(li);
            })
          })

        })

      }
    });
  });

  rightList.appendChild(ul);

}


function sendRequest(method, url, body, callback) {
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.onload = () => {
    callback(JSON.parse(request.response));
  }
  request.send(body);
}