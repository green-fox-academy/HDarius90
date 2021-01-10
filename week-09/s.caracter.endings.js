'use strict';

function countWordsEndsWithS(inputText) {
    let numberOfS = 0;
    let  words = inputText.split(' ');
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].toLowerCase().split('');
        if (letters[letters.length - 1] === 's') {
            numberOfS++;
        }
    }
return numberOfS;
};

console.log(countWordsEndsWithS("ends oS with s characters"));