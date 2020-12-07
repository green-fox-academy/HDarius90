'use strict';

/* A termék adatbázisunkat egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a termék nevek (kulcs) szövegek, azok árai (érték) pedig számok.

    Készíts egy Map-et az alábbi kulcs-érték párokkal:
    Termék név (kulcs) 	Ár (érték)
    Tojás 	200
    Tej 	200
    Hal 	400
    Alma 	150
    Kenyér 	50
    Csirke 	550

    Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
        Mely termékek kerülnek kevesebbe mint 201? (csak a név)
        Mely termékek kerülnek többe mint 150? (név és ár)
 */

const products = { Tojás: 200, Tej: 200, Hal: 400, Alma: 150, Kenyér: 50, Csirke: 550 };

function getCheaper(objekt) {
    const prices = Object.values(products);
    const keys = Object.keys(products);
    let cheapProducts = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < 201) {
            cheapProducts.push(keys[i]);
        }
    }
    return cheapProducts;
}

function getExpensive(objekt) {
    const prices = Object.values(products);
    const keys = Object.keys(products);
    let expensiveProducts = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 150) {
            expensiveProducts.push(keys[i]);
            expensiveProducts.push(prices[i]);
        }
    }
    return expensiveProducts;
}

console.log(getCheaper(products));
console.log(getExpensive(products));