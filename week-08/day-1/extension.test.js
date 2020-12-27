'use strict';

import test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension.js';

test('add: 2 and 3 is 5', function (t) {
    const actual = add(1, 3);
    const expected = 4;

    t.equal(expected, actual);
    t.end();
});

test('add: 1 and 4 is 5', function (t) {
    const actual = add(1, 5);
    const expected = 6;

    t.equal(expected, actual);
    t.end();
});

test('max of three: first', function (t) {
    t.equal(maxOfThree(4, 3, 5), 5);
    t.end();
});

test('max of three: third', function (t) {
    t.equal(maxOfThree(3, 7, 5), 7);
    t.end();
});

test('median: four', function (t) {
    t.equal(median([7, 5, 3, 5]), 5);
    t.end();
});

test('median: five', function (t) {
    t.equal(median([1, 2, 3, 4, 5]), 3);
    t.end();
});

test('median: three', function (t) {
    t.equal(median([1, 2, 5, 4, 3, 1, 4, 3, 3, 4, 3, 5, 1]), 3);
    t.end();
});

test('median: two and half', function (t) {
    t.equal(median([1, 4, 2, 4, 2, 3, 5, 3, 1, 1]), 2.5);
    t.end();
});

test('is vowel: a', function (t) {
    t.ok(isVowel('a'));
    t.end();
});

test('is vowel: u', function (t) {
    t.ok(isVowel('u'));
    t.end();
});

test('is vowel: u', function (t) {
    t.ok(isVowel('U'));
    t.end();
});

test('translate: bemutatkozik', function (t) {
    t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
    t.end();
});

test('translate: lagopus', function (t) {
    t.equal(translate('lagopus'), 'lavagovopuvus');
    t.end();
});

test('translate: lagopus', function (t) {
    t.equal(translate('LaGopus'), 'lavagovopuvus');
    t.end();
});