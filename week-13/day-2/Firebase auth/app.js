'use strict';



document.querySelector('button').addEventListener("click", () => {
  const mail = document.getElementById('login-mail').value;
  const pw = document.getElementById('login-password').value;

  console.log('click');

  firebase.auth().createUserWithEmailAndPassword(mail, pw)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('1. ', user);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log(user);
        } else {
          console.log('No user signed in');
        }
      });


      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

});

