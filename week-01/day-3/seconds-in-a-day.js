'use strict';


const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
let time = currentHours * 60 ** 2 + currentMinutes * 60 + currentSeconds;

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani


console.log("Hátralevő idő: " + (86400 - time) + " s");