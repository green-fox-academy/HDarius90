//import firebase from "firebase";

import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAOZ_75SMLYPXHSiw-_YbhnUpDZ6p0aBWg",
    authDomain: "react-chat-37c47.firebaseapp.com",
    projectId: "react-chat-37c47",
    storageBucket: "react-chat-37c47.appspot.com",
    messagingSenderId: "84475764253",
    appId: "1:84475764253:web:9283d73e40b0e562f2b0f4"
};


firebase.initializeApp(firebaseConfig);

export default firebase;