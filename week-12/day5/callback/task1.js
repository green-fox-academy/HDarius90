'use strict';

const words = ['map', 'reduce', 'filter'];

const numbers = [1, 2, 3, 4];


var addOne = (current) => current + 1;

var removeEvenLetters = (current) => current.split('').filter((_, i) => i % 2 === 0).join('');



console.log(numbers.map(addOne));

console.log(words.map(removeEvenLetters));










/*
function removeSecondLetter(word) {
    let arrayForLetters = [];
    let joined;
    for (let i = 0; i < word.length; i += 2) {
        let cutWords = '';
        cutWords += word[i];
        arrayForLetters.push(cutWords);
        joined = arrayForLetters.join('');
    }
    return joined;
}
//console.log(removeSecondLetter(word));
*/