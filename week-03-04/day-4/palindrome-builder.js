'use strict';

function createPalindrome(word) {
    let palindromeWord;
    let letters = word.split('');
    let index = letters.length;
    let j = index;
    let palindrome = [];
    for (let i = 0; i < letters.length; i++) {
        palindrome.push(letters[i]);
    }
    for (let j = letters.length - 1; j >= 0; j--) {
        palindrome.push(letters[j]);
    }
    palindromeWord = palindrome.join('');
    return palindromeWord;
}

console.log(createPalindrome("nyunyóka"));