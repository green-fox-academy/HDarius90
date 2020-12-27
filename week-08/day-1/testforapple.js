
/* export default function(param) {
    console.log(param);
};


import tape from 'tape';

import {addTwoNumbers } from './function.js';

tape('add 2 and 3 result in 5', function(t){
    const expected = 5;
    const actual = addTwoNumbers(2,3);

    t.equal(actual, expected)
    t.end();
}); */

import tape from 'tape';
import Apple from './apples.js';

tape('get Apple string', function(t){
    const expected = 'apple';
    const firstApple = new Apple();
    const actual = firstApple.getApple();

    t.equal(actual, expected)
    t.end();
});