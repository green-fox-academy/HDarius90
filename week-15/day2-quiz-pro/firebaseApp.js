import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCi1pou4gHGfWauc805awZZJz___uQHr2Y",
    authDomain: "quiz-a86fe.firebaseapp.com",
    projectId: "quiz-a86fe",
    storageBucket: "quiz-a86fe.appspot.com",
    messagingSenderId: "670005691063",
    appId: "1:670005691063:web:c18a733eb77a420cdb8332",
    measurementId: "G-2VHCZQXFE3"
};

firebase.initializeApp(firebaseConfig);

export { firebase };