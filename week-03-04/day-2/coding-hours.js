'use strict';

let codeDay = 6;
let lengthOfYear = 17 * 7 * 24;
let codeYear = 17*5*codeDay;
let codeRate = codeYear/(17*52);

console.log("Ha a hallgató csak hétköznap kódol, akkor " + codeYear + " órát kódol");
console.log("Ha az átlagos heti munkaidő 52 óra, akkor a hallgató " + codeRate*100 + "%-ot tölt kódolással a félév során");

