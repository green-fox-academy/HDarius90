'use strict';

const divMain = document.querySelector('main');
divMain.style.height = '120px';
divMain.style.display = 'flex';
divMain.style.justifyContent = 'center';

const amountDivSections = 3;

for (let i = 0; i < amountDivSections; i++) {
  const divSelect = document.createElement('div');
  divSelect.style.height = '100%';
  divSelect.style.width = '120px';
  divSelect.style.marginRight = '20px';

  divMain.appendChild(divSelect);
}

const divSelectLeft = divMain.querySelector('div:first-child');
const divSelectCenter = divMain.querySelector('div:nth-of-type(2)');
const divSelectRight = divMain.querySelector('div:last-child');

const optionContent = ['bread', 'milk', 'orange', 'tomato'];

const selectLeft = createElementSelect('leftSide');
divSelectLeft.appendChild(selectLeft);

const selectRight = createElementSelect('rightSide');
divSelectRight.appendChild(selectRight);

function createElementSelect(side) {
  const select = document.createElement('select');
  select.style.width = '100%';
  select.style.height = '100%';
  select.multiple = 'multiple';
  select.size = '4';
  makeSelectOptions(select, side);

  return select;
}

function makeSelectOptions(box, side) {
  const amountOfOptions = 4;

  for (let i = 0; i < amountOfOptions; i++) {
    const option = document.createElement('option');
    const p = document.createElement('p');

    option.style.width = '110px';
    option.style.height = '20px';
    option.style.padding = '5px';

    if (i === 0) {
      option.selected = true;
    }

    if (side === 'leftSide') {
      option.value = optionContent[i];
      option.textContent = optionContent[i];

      box.appendChild(option);
    }
  }
}

const amountButtons = 4;
const amountButtonsElements = ['Up', '>', 'X', 'Down'];

const options = document.querySelectorAll('option');

for (let i = 0; i < amountButtons; i++) {
  let button = document.createElement('button');
  button.textContent = amountButtonsElements[i];
  button.name = amountButtonsElements[i];
  button.style.width = '100%';
  button.style.height = '30px';
  button.addEventListener('click', controller);
  divSelectCenter.appendChild(button);
}

function controller(e) {
  if (e.target.name === 'Up') {
    moveUpElement();
  } else if (e.target.name === '>') {
    moveToElement();
  } else if (e.target.name === 'X') {
    deleteElement();
  } else if (e.target.name === 'Down') {
    moveDownElement();
  }
}

function moveUpElement() {
  moveElement('up');
}

function moveToElement() {}

function deleteElement() {}

function moveDownElement() {
  moveElement('down');
}

function moveElement(direction) {
  let index = selectLeft.selectedIndex;

  if (direction === 'up') {
    if (index === 0) {
      return;
    } else {
      options[index].selected = false;
      options[index - 1].selected = true;
    }
  } else {
    if (index === 3) {
      return;
    } else {
      options[index].selected = false;
      options[index + 1].selected = true;
    }
  }
}