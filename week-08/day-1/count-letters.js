/* Írj egy függvényt, ami bemeneti paraméterként egy Stringet vár, és visszatér egy objektummal, ahol az összes betű egy-egy kulcs, az előfordulásának száma pedig az érték!
Írj rá teszteket! */

'use strict';

export function countLetters(text) {
    const letters = text.toLowerCase().split('');
    const countedLetters = {};
    for (let i = 0; i < letters.length; i++) {
        let letterCounter = 0;
        if (countedLetters.hasOwnProperty(letters[i])) {
        } else {
            for (let j = 0; j < letters.length; j++) {
                if (letters[i] === letters[j]) {
                    letterCounter++;
                }
                countedLetters[letters[i]] = letterCounter;
            }
        }
    }

return countedLetters;
}

