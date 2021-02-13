'use strict';

const api = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 3000,
  sub: 'api/links'
}

const url = `${api.protocol}://${api.host}:${api.port}/${api.sub}`;
console.log(url);
document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  const inputUrl = document.getElementById('url-input').value;
  const inputAlias = document.getElementById('alias-input').value;

  const data = {
    inputUrl, inputAlias
  };

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.status == 500) {
      console.error('Hiba van.');
      return;
    }
    return response.json()
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

});