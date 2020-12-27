import test from 'tape';
import CAB from './cows-and-bulls.js';
import getRndInteger from './cows-and-bulls.js';

test('correct guess', function (t) {
    let game = new CAB();
    const expextedGuess = game.field;
    const actual = game.guessing(expextedGuess);
    const expected = 'WIN';


    t.equal(expected, actual);
    t.end();
});

