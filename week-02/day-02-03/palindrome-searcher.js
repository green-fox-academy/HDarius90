'use strict';

//Készíts egy Készíts egy searchPalindrome nevű függvényt, ami követi a jelenlegi nyelv stílus útmutatóját. Bemeneten fogad egy stringet. Majd kikeresi, hogy taláhatóak-e 3 karakternél hoszabb palindrómák benne és végül visszaküldi a talált palindrómák listáját. nevű függvényt, ami követi a jelenlegi nyelv stílus útmutatóját. Bemeneten fogad egy stringet. Majd kikeresi, hogy taláhatóak-e 3 karakternél hoszabb palindrómák benne és végül visszaküldi a talált palindrómák listáját.



function searchPalindrome(s) {

  let subStrings = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      let subString = s.substring(j, j + i + 3);
      if (subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
        subStrings.push(subString);
      }
    }
  }
  return subStrings;
}

console.log(searchPalindrome("dog goat dad duck doodle never"));