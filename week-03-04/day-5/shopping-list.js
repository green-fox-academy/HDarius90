'use strict';

/* Bevásárlólistánkat egy tömböt fogjuk reprezentálni, mely szövegeket tartalmaz.

    Készíts egy tömböt az alábbi tételekkel:

    tojás, tej, hal, alma, kenyér és csirke

    Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
        Van tej a listán?
        Van banán a listán? */


const shopppingList = ['tojás', 'tej', 'hal', 'alma', 'kenyér', 'csirke'];

function checkList (listOfItems) {
    for ( let i = 0; i < listOfItems.length; i++) {
        if(listOfItems[i] === 'tej'){
            console.log('Van tej a listán!');
        }
        if(listOfItems[i] === 'banán'){
            console.log('Van banán a listán!');
        }
    }
}

checkList(shopppingList);