import test from 'tape';
import Animal from './animal.js';

test('hunger methode', function (t) {
    const actual = new Animal();
    actual.eat();
    const expected = {
        hunger: 49,
        thirst: 50,
        happiness : 50,
    }

    t.equal(expected.hunger, actual.hunger);
    t.end();
});

test('drink methode', function (t) {
    const actual = new Animal();
    actual.drink();
    const expected = {
        hunger: 50,
        thirst: 49,
        happiness : 50,
    }

    t.equal(expected.thirst, actual.thirst);
    t.end();
});

test('play methode', function (t) {
    const actual = new Animal();
    actual.play();
    const expected = {
        hunger: 51,
        thirst: 51,
        happiness : 50,
    }

    t.equal(expected.hunger, actual.hunger);
    t.equal(expected.thirst, actual.thirst);
    t.end();
});

