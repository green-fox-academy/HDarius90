const { default: firebase } = require('firebase');
const fs = require('fs');

//CSERÉLD LE A SAJÁT APPOD CONFIG OBJECTJÉRE!
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

firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log('signed in');
  })
  .catch((error) => {
    console.error(error);
  });

const fileName = './restaurants.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
  if (err) {
    throw err;
  }

  content = JSON.parse(data);
});

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    const restaurants = Object.keys(content);

    for (let i = 0; i < 19; i++) {
      db.collection('restaurant')
        .doc(restaurants[i])
        .set(content[restaurants[i]])
        .then(() => {
          console.log(`Record saved, ${i}`);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  } else {
    console.log('no user');
  }
});

// -----------------------
// A Fenti kódhoz ne nyúlj!
// -----------------------
