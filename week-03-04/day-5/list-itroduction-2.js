
'use strict';

/* 
    Készíts egy tömböt ('TombA') mely tartalmazza a következő értékeket:

    Alma, Avokádó, Áfonya, Durian, Mangó

   Készíts egy új tömböt TombB névvel amely a TombA értékeit tartalmazza!
   Írattasd ki, hogy a TombA tartalmazza-e a Durian-t vagy sem!
   Távolítsd el a Durian-t a TombB-ből!
   Add hozzá a Kivi-t a TombA 4. eleme utánn!
   Hasonlítsd össze TombA és TombB méretét!
   Keresd meg az Avokádó indexét a TombA-ban!
   Keresd meg az Durian indexét a TombB-ban!
   Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
   Írasd ki a TombA 3. elemét! */

const TombA = ['Alma', 'Avokádó', 'Áfonya', 'Durian', 'Mangó'];
let TombB = TombA.map((x) => x);

function isDurian(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Durian') {
            TombB.splice(i, 1);
            return console.log('TombA tartalmazza a Durian-t');
        }
    }
    return console.log('TombA nem tartalmazza a Durian-t');
}

function getIndexOfAvokado(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Avokádó') {
            return console.log(`Az Avokádó a ${i+1}. elem.`);
        }
    }
    return console.log('Nincs benne Avokádó');
}

function getIndexOfDurian(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Durian') {
            return console.log(`A Durian a ${i+1}. elem.`);
        }
    }
    return console.log('Nincs benne Durian');
}

isDurian(TombA);
TombA.splice(TombA.length, 0, 'Kivi');
console.log('TombA mérete: ' + TombA.length + '\n' + 'TombB mérete: ' + TombB.length);
getIndexOfAvokado (TombA);
getIndexOfDurian (TombB);
TombB.push('Dinnye' , 'Pomelo');
console.log(TombA[2]);
