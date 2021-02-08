'use strict';

let text = "Ez itt egy próbamondat. Meg egy másik."

export default function swapWords(txt) {

    let splittedTxt = txt.trim().toLowerCase().split(' ');

    for (let i = 0; i < splittedTxt.length - 1; i += 2) {
        let temp = splittedTxt[i];
        splittedTxt[i] = splittedTxt[i + 1];
        splittedTxt[i + 1] = temp;
    }
    let returnArr = [];
    let result = splittedTxt.join(' ').split('.');
    let cut = result.slice(0, result.length - 1);
    let secSentence = cut[1];
    let splitSecSentence = secSentence.trim().split(' '); //[ 'egy', 'meg', 'másik' ]
    let centerWord = splitSecSentence.splice(0, 1); //[ 'egy' ]
    let firstPart = cut[0].concat(' ' + centerWord);
    let endSentence = splitSecSentence.join(' ');

    const firstWord = firstPart;
    const wordCapitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + '.';
    const secWord = endSentence;
    const wordCapitalized2 = secWord.charAt(0).toUpperCase() + secWord.slice(1);
    let yoda1 = 'Khm-khm.';
    let yoda2 = 'Hmm.';
    returnArr = [wordCapitalized, yoda1, wordCapitalized2, yoda2];


    return returnArr.join(' ');
}

console.log(swapWords(text)); //Itt ez próbamondat egy. Khm-khm. Egy meg másik Hmm.

















/*

function getSithText(postedText) {

    const sentences = postedText.toLowerCase().split('.');
    const returnSentences = [];

    sentences.forEach(sentence => {
        const words = sentence.split(' ');
        let newSentence = [];
        for (let i = 0; i < words.length; i++) {
            if (i % 2 === 0) {
                newSentence.push(words[i + 1]);
            } else {
                newSentence.push(words[i - 1]);
            }
        }

        let joined = newSentence.join(' ') + '.';
        returnSentences.push(joined);
    });
    return returnSentences;
}

console.log(getSithText(text));
*/