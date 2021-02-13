'use strict';

const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyAJN5_K6p74akew56pEehu7wBlWgwY_YTs",
  authDomain: "nosql-intro-5695b.firebaseapp.com",
  projectId: "nosql-intro-5695b",
  storageBucket: "nosql-intro-5695b.appspot.com",
  messagingSenderId: "348023737637",
  appId: "1:348023737637:web:e6a159c69fab4f16b41ecc"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection('restaurant')
  .where('borough', '==', 'Bronx')
  .get()
  .then(data => {
    data.forEach(doc => {
      console.log(doc.id, doc.data().name);
    });
    db.terminate();
  })
  .catch(err => {
    console.log(err);
  });

/* async function getDataFromCollection(collection) {

  console.log('calling');
  const result = await getFireBaseColl(collection);

  result.forEach(doc => {
    console.log(doc.data().name);
  });
  console.log('Done.');
}


function getFireBaseColl(collection) {
  return db.collection(collection)
    .get();
}

getDataFromCollection('restaurant'); */
