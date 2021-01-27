let eye = document.querySelector('.fa-eye');
let password = document.getElementById('password');

eye.addEventListener('click', showPass);

function showPass(event) {
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}