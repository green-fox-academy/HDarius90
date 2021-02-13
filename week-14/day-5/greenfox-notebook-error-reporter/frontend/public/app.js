'use strict';


const backendAPI = 'http://127.0.0.1:5000';
const postEndpoint = '/tickets';

const postMethod = {
  method: 'POST',
  mode: 'cors',
  headers: {
    "Content-Type": "application/json"
  }
}


document.getElementById('ticket-form').addEventListener('submit', (event) => {

  event.preventDefault();

  const inputData = getFormData();
  const url = `${backendAPI}${postEndpoint}`;

  postMethod['body'] = JSON.stringify(inputData);

  fetch(url, postMethod)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Hiba!');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log('Hiba', err);
    })

});

function getFormData() {
  const reporterName = document.getElementById('reporter-name').value;
  const manufacturer = document.getElementById('manufacturer').value;
  const serialNumber = document.getElementById('serial-number').value;
  const description = document.getElementById('description').value;

  return {
    reporterName, manufacturer, serialNumber, description
  };
}
