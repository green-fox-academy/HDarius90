'use strict';

/* A termék adatbázisunkat egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a termék nevek (kulcs) szövegek és azok árai (érték) pedig számok.

    Készíts egy Map-et az alábbi kulcs-érték párokkal:
    Termék név (kulcs) 	Ár (érték)
    Tojás 	200
    Tej 	200
    Hal 	400
    Alma 	150
    Kenyér 	50
    Csirke 	550

    Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
        Mennyibe kerül a hal?
        Melyik a legdrágább termék?
        Mi a termékek átlag ára?
        Hány termék ára van 300 alatt?
        Van-e olyan termék, melyet pontosan 125Ft-ért tudunk megvenni?
        Melyik a legolcsóbb termék? */

const products = { Tojás: 200, Tej: 200, Hal: 400, Alma: 150, Kenyér: 50, Csirke: 550 };

function expensive(objekt) {
    const prices = Object.values(products);
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i];
        }
    }
    return max;
}

function avarage(objekt) {
    const prices = Object.values(products);
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    return sum/prices.length;
}

function cheap(objekt) {
    const prices = Object.values(products);
    let counter = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < 300) {
            counter += 1;
        }
    }
    return counter;
}
function isThere125(objekt) {
    const prices = Object.values(products);
   
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] === 125) {
            return 'Van olyan termék ami csak 125 HUF!!!';
        }
    }
    return 'Nincs olyan termék ami csak 125 HUF :(';
}

function cheapest(objekt) {
    const prices = Object.values(products);
    const keys = Object.keys(products);
    let min = prices[0];
    let indexOfCheapest = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            indexOfCheapest = i;
        }
    }
    return keys[indexOfCheapest] + ' ' + min;
}

console.log('A toás ára: ' + products.Tojás);
console.log(expensive(products));
console.log(avarage(products));
console.log(cheap(products));
console.log(isThere125(products));
console.log(cheapest(products));
