const dolphinP = document.querySelector('body').querySelector('p:last-of-type');
dolphinP.classList.add('dolphin');

const dolphinPWithClass = document.querySelector('.dolphin');
const appleP = document.querySelector('.alma');
const cicaP = document.querySelector('.cica');
const lufiP = document.querySelector('.lufi');

if (dolphinPWithClass) {
  appleP.textContent = 'körte';
}

if (appleP) {
  cicaP.textContent = 'kutya';
}

appleP.classList.add('red');

lufiP.style.width = '40px';
lufiP.style.height = '50px';