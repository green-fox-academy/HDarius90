const firebaseConfig = {
  apiKey: "AIzaSyBCj1TsXnT8Sx4dzbY9oeKXLCvdQZy-Nxk",
  authDomain: "balage4-a1004.firebaseapp.com",
  projectId: "balage4-a1004",
  storageBucket: "balage4-a1004.appspot.com",
  messagingSenderId: "748166318653",
  appId: "1:748166318653:web:60a237225e87a1224e3854",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Initialized');

//auth
/* firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
}); */

//provider = new firebase.auth.GoogleAuthProvider();


