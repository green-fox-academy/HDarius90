const button = document.querySelector('button');

button.onclick = () => {
  const divSelector = document.querySelector('div');
  const divWithPartyClass = document.querySelector('.party');

  if (divWithPartyClass) {
    divSelector.classList.remove('party');
  } else {
    divSelector.classList.add('party');
  }
};