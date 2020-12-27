'use strict';

import test from 'tape';
import Sharpie from './sharpie.js';

test('test if color matches', function (t) {
    const actual = new Sharpie('blue', 10);
    const expected = {
        color: 'blue',
        width: 10,
        inkAmount : 100,
    }

    t.equal(expected.color, actual.color);
    t.end();
});

test('test if width matches', function (t) {
    const actual = new Sharpie('blue', 10);
    const expected = {
        color: 'blue',
        width: 10,
        inkAmount : 100,
    }

    t.equal(expected.width, actual.width);
    t.end();
});

test('test with no color throws error', function (t) {


    t.throws(() => {
        new Sharpie(10)
    });
    t.end();
});

test('test with no width throws error', function (t) {


    t.throws(() => {
        new Sharpie('blue')
    });
    t.end();
});

test('test with no paramter throws error', function (t) {


    t.throws(() => {
        new Sharpie()
    });
    t.end();
});




