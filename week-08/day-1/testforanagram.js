
import tape from 'tape';
import isAnagram from './anagram.js';

tape('check anagrams with words', function(t){
    const expected = true;
    const actual = isAnagram("god", "dog");

    t.equal(actual, expected)
    t.end();
});

tape('check anagrams with anagram words', function(t){
    const expected = true;
    const actual = isAnagram("gog", "gog");

    t.equal(actual, expected)
    t.end();
});

tape('check anagrams with HigherCase words', function(t){
    const expected = true;
    const actual = isAnagram("Stressed", "Desserts");

    t.equal(actual, expected)
    t.end();
});