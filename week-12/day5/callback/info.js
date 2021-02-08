'use strict';
/*
function callback() {
    console.log('Ezt a függvényt gombnyomásra hajtja végre a program');
};

let button = document.querySelector('button');

button.onclick = callback;
*/

function useCallback(callback) {
    callback('Chewing out a rhythm on my bubble gum');
    callback('The sun is out and I want some');
    callback(
        'It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach'
    );
};

const printSentence = sentence => {
    console.log(sentence);
};

useCallback(printSentence);

/*
Chewing out a rhythm on my bubble gum
The sun is out and I want some
It's not hard, not far to reach, we can hitch a ride to Rockaway Beach
*/



//3 külön függvény írása

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

filterLargerThanTwo(numbers);
filterNegative(numbers);
filterEven(numbers);

function filterLargerThanTwo(numbers) {
    let result = [];

    for (let number of numbers) {
        if (number > 2) {
            result.push(number);
        }
    }

    return result;
}

function filterNegative(numbers) {
    let result = [];

    for (let number of numbers) {
        if (number < 0) {
            result.push(number);
        }
    }

    return result;
}

function filterEven(numbers) {
    let result = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }

    return result;
}


//helyette lehet igy:

function filter(numbers, callback) {
    let result = [];

    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }
    return result;
}


filter(numbers, n => n > 2);
filter(numbers, n => n < 0);
filter(numbers, n => n % 2 === 0);