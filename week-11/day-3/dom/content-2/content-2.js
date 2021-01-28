const newContent = ['apple', 'banana', 'cat', 'dog'];

const liElements = document.querySelectorAll('li');

for (let i = 0; i < liElements.length; i++) {
  liElements[i].textContent = newContent[i];
}

const ulElement = document.querySelector('ul');
ulElement.classList.add('limegreen');