import express from 'express';
//import { Game } from 'gameController.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import firebase from 'firebase';
import fs from 'fs';


const __dirname = dirname(fileURLToPath(
    import.meta.url));
const app = express();
const port = 3003;


const firebaseConfig = {
    apiKey: "AIzaSyCi1pou4gHGfWauc805awZZJz___uQHr2Y",
    authDomain: "quiz-a86fe.firebaseapp.com",
    projectId: "quiz-a86fe",
    storageBucket: "quiz-a86fe.appspot.com",
    messagingSenderId: "670005691063",
    appId: "1:670005691063:web:c18a733eb77a420cdb8332",
    measurementId: "G-2VHCZQXFE3"
};



app.use(express.static('public'));


//app.use('./public', express.static('public'));

/*
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'start.html'));
});
*/

//FRONTEND
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});


app.get('/questions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'questions.html'));
});

//BACKEND

app.use(express.json());

app.get('/api/game', async(req, res, next) => {
    const queryRef = await db.collection('questions').get();
    const questions = [];

    queryRef.forEach(doc => questions.push({ id: doc.id, ...doc.data() }))

    const randomIndex = Math.random() * questions.length

    res.json(questions[randomIndex]);

});


app.get('/api/questions', async(req, res, next) => {
    const queryRef = await db.collection('questions').get();
    const questions = [];

    queryRef.forEach(doc => questions.push({ id: doc.id, question: doc.data().question }))

    res.json(questions);

});


app.post('/api/questions', async(req, res, next) => {
    const inputData = req.body;
    const doc = await db.collection('questions')
        .add(inputData); //validálni kell //új doksi hozzáadása
    res.json({
        id: doc.id
            //postmanben lehet ellenőrizni
            //vagy js-ben fetch 

    });
});



//app.delete('/api/questions/:id', /*deleteQuestions method*/ );



app.listen(port, () => {
    console.log(`server listens on port ${port}`)
});



/*
//adatbázis betöltése firebase-re
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

const fileName = './quiz_app.hu.json';
let content = [];



fs.readFile(fileName, function read(err, data) {
    if (err) {
        throw err;
    }

    content = JSON.parse(data);
});

firebase.auth().onAuthStateChanged(async(user) => {
    if (user) {
        const questions = content.questions;

        for (let i = 0; i < questions.length; i++) {
            db.collection('questions')
                .add(questions[i])
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
*/