/* Írj egy függvényt, ami kiszámolja a Fibonacci sorozat n-edik tagját a megadott n bemenet alapján!
Írj rá teszteket! */

'use strict';

function fibonacci (n) {
    if(n === 1){
        return 0;
    }
    let fibNMinusTwo = 0;
    let fibNMinusOne = 1;
    let fibN = fibNMinusTwo + fibNMinusOne;
    for(let i = 2; i <  n;i++){
        fibN = fibNMinusTwo + fibNMinusOne;
        fibNMinusTwo = fibNMinusOne;
        fibNMinusOne = fibN;
    }

    return fibN;
}

export default fibonacci;