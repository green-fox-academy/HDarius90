import tape from 'tape';
import {countLetters} from './count-letters.js';

tape('counting letters in kaka', function(t){
    const expected = {
        k: 2,
        a: 2,
    };
    
    const actual = countLetters('kaka');

    t.deepEqual(actual, expected);
    t.end();
});

tape('counting letters in Kaka', function(t){
    const expected = {
        k: 2,
        a: 2,
    };
    
    const actual = countLetters('Kaka');

    t.deepEqual(actual, expected);
    t.end();
});

tape('counting letters in Hello Word', function(t){
    const expected = {
        h: 1,
        e: 1,
        l: 2,
        o: 2,
        ' ': 1,
        w: 1,
        r: 1,
        d: 1
    };
    
    const actual = countLetters('Hello Word');

    t.deepEqual(actual, expected);
    t.end();
});