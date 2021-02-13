'use strict';

const backendUrl = 'http://localhost:5000';
const searchEndpoint = backendUrl + '/search';

const queryTableMapping = [
  'license', 'brand', 'model', 'color', 'year'
];


document.getElementById('search-form').addEventListener('submit', (event) => {
  const form = document.querySelector('form');

  event.preventDefault();

  if (form.checkValidity()) {
    document.getElementById('form-error').classList.add('d-none');


    const licensePlate = document.getElementById('license-plate').value;
    const selectedRadio = document.querySelector('[name=filter]:checked');
    const tbody = document.querySelector('#search-results tbody');

    tbody.innerHTML = '';

    let filter = null;
    if (selectedRadio !== null) {
      filter = selectedRadio.value;
    }

    // http://localhost:5000/search?q=HMZ&police=1

    const searchParamValues = {};

    if (licensePlate.length > 0) {
      searchParamValues['q'] = licensePlate;
    }
    if (selectedRadio !== null) {
      searchParamValues[selectedRadio.value] = 1
    }

    const queryParams = new URLSearchParams(searchParamValues);

    const url = searchEndpoint + '?' + queryParams.toString();

    fetch(url).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    }).then(data => {

      const queryResults = data.data;
      console.log(queryResults);

      if (queryResults.length > 0) {

        queryResults.forEach(row => {
          const rowElement = document.createElement('tr');

          queryTableMapping.forEach(key => {
            const element = document.createElement('td');
            element.textContent = '';
            if (row[key]) {
              element.textContent = row[key];
              if (row[key] === 'brand') {
                const brandLink = document.createElement('a');
                brandLink.textContent = row[key];
                element.appendChild(brandLink);
                brandLink.addEventListener('click', (event) => {
                  // http://.../search/audi
                  const brandUrl = searchEndpoint + "/" + event.target.textContent;
                  fetch(brandUrl).then()
                })
              } else {
                element.textContent = row[key];
              }
            }
            rowElement.appendChild(element);
          });
          tbody.appendChild(rowElement);
        });
      }


    }).catch(err => {

      const errorElement = document.getElementById('form-error');
      errorElement.textContent = err.message;
      errorElement.classList.remove('d-none');
    });

  } else {
    form.classList.add('was-validated');
  }


});

