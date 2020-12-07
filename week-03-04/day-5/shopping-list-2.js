'use strict';


/* 
Reprezentáld az alábbi termékeket és árukat:
Termék 	Ár
Tej 	1.07
Rizs 	1.59
Tojás 	3.14
Sajt 	12.60
Csirke 	9.40
Alma 	2.31
Paradicsom 	2.58
Krumpli 	1.75
Hagyma 	1.10

Bob bevásárló listája
Termék 	Mennyiség
Tej 	3
Rizs 	2
Tojás 	2
Sajt 	1
Csirke 	4
Alma 	1
Paradicsom 	2
Krumpli 	1

Alice bevásárló lisjája
Termék 	Mennyiség
Rizs 	1
Tojás 	5
Csirke 	2
Alma 	1
Paradicsom 	10

Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
    Mennyit fizet Bob?
    Mennyit fizet Alice?
    Ki vett több rizst?
    Ki vett több krumplit?
    Ki vett több különböző terméket?
    Ki vett több különböző terméket? (ár) */

const priceOfItems = { Milk: 1.07, Rice: 1.59, Egg: 3.14, Chees: 12.6, Chicken: 9.4, Apple: 2.31, Tomato: 2.58, Potato: 1.75, Onion: 1.1 };
const Bob = { Milk: 3, Rice: 2, Egg: 2, Chees: 1, Chicken: 4, Apple: 1, Tomato: 2, Potato: 1 };
const Alice = { Rice: 1, Egg: 5, Chicken: 2, Apple: 1, Tomato: 10 };

function calcAllPrice(list, priceList) {

    let itemsPrice = Object.values(priceList);
    let namesOfPrice = Object.keys(priceList);
    let listPrices = Object.values(list);
    let listNames = Object.keys(list);

    let sumPrice = 0;

    for (let i = 0; i < listNames.length; i++) {
        for (let j = 0; j < namesOfPrice.length; j++) {
            if (listNames[i] === namesOfPrice[j]) {
                sumPrice = sumPrice + (listPrices[i] * itemsPrice[j])
            }
        }
    }
    return sumPrice;

}

function compare(list1, list2, search) {

    let list1Amount = Object.values(list1);
    let list1NameOfItem = Object.keys(list1);
    let list2Amount = Object.values(list2);
    let list2NameOfItem = Object.keys(list2);

    for (let i = 0; i < list1NameOfItem.length; i++) {
        if (list1NameOfItem[i] === search) {
            for (let j = 0; j < list2NameOfItem.length; j++) {
                if (list2NameOfItem[j] === search) {
                    if (list1Amount[i] > list2Amount[j]) {
                        return console.log('Bobnak van több az adott termékbők.');
                    } else {
                        if (list1Amount[i] < list2Amount[j]) {
                            return console.log('Alicenak van több az adott termékbők.');
                        }
                        return console.log('mindkettőjüknek ugyan annyi van');
                    }
                }
            }
            throw 'Nincs rajta Alice listáján!'
        }
    }
    throw 'Nincs rajta Bob listáján!'
}


console.log('Bob listáján szereplő összes tétel teljes ára: ' + calcAllPrice(Bob, priceOfItems));
console.log('Alice listáján szereplő összes tétel teljes ára: ' + calcAllPrice(Alice, priceOfItems));

try {
    compare(Bob, Alice, 'Rice');
} catch (e) {
    console.log(e);
};

try {
    compare(Bob, Alice, 'Potato');
} catch (e) {
    console.log(e);
};


if (Object.keys(Bob).length > Object.keys(Alice).length) {
    console.log('Bob több terméket vásárolt.');
} else {
    if (Object.keys(Bob).length < Object.keys(Alice).length) {
        console.log('Alice több terméket vásárolt.');
    } else {
        console.log('Ugyanannyi terméket vásoltak!');
    }
};


if (calcAllPrice(Bob, priceOfItems) > calcAllPrice(Alice, priceOfItems)) {
    console.log('Bob többet vásárolt!');
} else {
    if (calcAllPrice(Bob, priceOfItems) < calcAllPrice(Alice, priceOfItems)) {
        console.log('Alice többet vásárolt!');
    }
    else {
        console.log('Ugyanannyit vásoltak!');
    }
};
