const img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute(
  'src',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/305px-Elephant_Diversity.jpg'
);
img.width = '168';
img.style.display = 'block';
img.style.marginBottom = '20px';

const siteLink = document.querySelector('a');
siteLink.href = 'https://www.greenfoxacademy.com/';
siteLink.setAttribute('target', '_blank');
siteLink.style.display = 'block';
siteLink.style.marginBottom = '20px';

const secondButton = document.querySelector('.this-one');
secondButton.textContent = 'Ne kattints ide!';
secondButton.disabled = true;