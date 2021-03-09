import firebase from 'firebase';
import fs from 'fs';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuaaX8-MssOE86zrHpYAhzApBiMRr9RGE",
    authDomain: "raddit-project-bde75.firebaseapp.com",
    projectId: "raddit-project-bde75",
    storageBucket: "raddit-project-bde75.appspot.com",
    messagingSenderId: "351972125455",
    appId: "1:351972125455:web:1cf0af107cd08ad88d6c7a"
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


const fileName = './comments.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
    if (err) {
        throw err;
    }

    content = JSON.parse(data);

    for (let comment of content.comments) {
        db.collection('comments')
            .add(comment)
            .then(() => {
                console.log('Document written');
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    }
});


firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {
        const comments = Object.keys(content);

        for (let i = 0; i < comments.length; i++) {
            db.collection('restaurant')
                .doc(comments[i])
                .set(content[comments[i]])
                .then(() => {
                    console.log('Document written');
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                });
        }
    } else {
        console.log('no user');
    }
});