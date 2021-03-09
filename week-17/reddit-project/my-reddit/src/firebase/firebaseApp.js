import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuaaX8-MssOE86zrHpYAhzApBiMRr9RGE",
    authDomain: "raddit-project-bde75.firebaseapp.com",
    projectId: "raddit-project-bde75",
    storageBucket: "raddit-project-bde75.appspot.com",
    messagingSenderId: "351972125455",
    appId: "1:351972125455:web:1cf0af107cd08ad88d6c7a"
};

firebase.initializeApp(firebaseConfig);

export { firebase };