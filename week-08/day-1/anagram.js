'use strict';
/*
Írj egy függvényt, amely paraméterként két Stringet vár, és egy booleannel tér vissza az alapján, hogy a két szó anagramma-e vagy sem!
Írj rá teszteket!
*/

function isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    let letters1 = word1.split('');
    let letters2 = word2.split('');
    let j = letters2.length;
    let anagram;
    for (let i = 0; i < letters1.length; i++) {
        j--;
        if (letters1[i] == letters2[j]) {
            anagram = true;
        } else {
            anagram = false;
        }
    }
    return anagram;
}



console.log(isAnagram("god", "dog"));

export default isAnagram;