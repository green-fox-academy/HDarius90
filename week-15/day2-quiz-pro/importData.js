import firebase from 'firebase';
import fs from 'fs';
import '@firebase/firestore';

//CSERÉLD LE A SAJÁT APPOD CONFIG OBJECTJÉRE!
const firebaseConfig = {
    apiKey: "AIzaSyAuU8teRzCGyrJ53cmJPFHRkPr0cP04tmM",
    authDomain: "quiz-app-b661d.firebaseapp.com",
    projectId: "quiz-app-b661d",
    storageBucket: "quiz-app-b661d.appspot.com",
    messagingSenderId: "543757046245",
    appId: "1:543757046245:web:0a4d852507becb20a39f0c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// firebase
//   .auth()
//   .signInAnonymously()
//   .then(() => {
//     console.log('signed in');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const fileName = './quiz_app.hu.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
    if (err) {
        throw err;
    }

    content = JSON.parse(data);

    for (let question of content.questions) {
        db.collection('questions')
            .add(question)
            .then(() => {
                console.log('Document written');
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    }
});

// firebase.auth().onAuthStateChanged(async (user) => {
//   if (user) {
//     const restaurants = Object.keys(content);

//     for (let i = 0; i < restaurants.length; i++) {
//       db.collection('restaurant')
//         .doc(restaurants[i])
//         .set(content[restaurants[i]])
//         .then(() => {
//           console.log('Document written');
//         })
//         .catch((error) => {
//           console.error('Error adding document: ', error);
//         });
//     }
//   } else {
//     console.log('no user');
//   }
// });

// -----------------------
// A Fenti kódhoz ne nyúlj!
// -----------------------