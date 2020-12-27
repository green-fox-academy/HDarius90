import tape from 'tape';
import fibonacci from './fibonacci.js';

tape('test fibonacci with 1', function(t){
    const expected = 0;
    const actual = fibonacci(1);

    t.equal(actual, expected);
    t.end();

});

tape('test fibonacci with 2', function(t){
    const expected = 1;
    const actual = fibonacci(2);

    t.equal(actual, expected);
    t.end();

});
tape('test fibonacci with 3', function(t){
    const expected = 1;
    const actual = fibonacci(3);

    t.equal(actual, expected);
    t.end();

});
tape('test fibonacci with 4', function(t){
    const expected = 2;
    const actual = fibonacci(4);

    t.equal(actual, expected);
    t.end();

});
tape('test fibonacci with 5', function(t){
    const expected = 3;
    const actual = fibonacci(5);

    t.equal(actual, expected);
    t.end();

});
tape('test fibonacci with 6', function(t){
    const expected = 5;
    const actual = fibonacci(6);

    t.equal(actual, expected);
    t.end();

});
tape('test fibonacci with 7', function(t){
    const expected = 8;
    const actual = fibonacci(7);

    t.equal(actual, expected);
    t.end();

});