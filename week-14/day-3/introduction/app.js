'use strict';

const db = firebase.firestore();

document.querySelector('button').addEventListener('click', () => {

  db.collection('restaurant')
    .get()
    .then(data => {
      data.forEach(doc => {
        console.log(doc.id, doc.data().name);
      });
    })
    .catch(err => console.log(err));

});
