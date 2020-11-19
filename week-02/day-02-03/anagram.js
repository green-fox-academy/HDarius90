'use strict';
/*
Készíts egy isAnagram nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót. A függvények bemeneten fogadnia a kell két stringet és visszaadni egy logikai (boolean) értéket attól függően, hogy a két string egymás anagrammája vagy sem.
Példák
bemenet 1 	bemenet 2 	kimenet
"dog" 	"god" 	true
"green" 	"fox" 	false
*/

function isAnagram(word1, word2) {
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