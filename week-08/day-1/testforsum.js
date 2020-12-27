import tape from 'tape';
import MyClass from './sum.js';

tape('Tömb elemeinek összege', function(t){
    const expected = 6;
    const firstCopy = new MyClass();
    const actual = firstCopy.sum([1,2,3]);

    t.equal(actual, expected);
    t.end();
});

tape('Tömb elemeinek összege üres tömb esetén', function(t){
    const expected = 0;
    const firstCopy = new MyClass();
    const actual = firstCopy.sum([]);

    t.equal(actual, expected);
    t.end();
});

tape('Tömb elemeinek összege egy elemű tömb esetén', function(t){
    const expected = 5;
    const firstCopy = new MyClass();
    const actual = firstCopy.sum([5]);

    t.equal(actual, expected);
    t.end();
});

tape('Tömb elemeinek összege null esetén', function(t){
    const expected = null;
    const firstCopy = new MyClass();
    const actual = firstCopy.sum(null);

    t.equal(actual, expected);
    t.end();
});

tape('Tömb elemeinek összege szting esetén', function(t){
    const expected = 21;
    const firstCopy = new MyClass();
    const actual = firstCopy.sum(['2','1']);

    t.notDeepEqual(actual, expected);
    t.end();
});