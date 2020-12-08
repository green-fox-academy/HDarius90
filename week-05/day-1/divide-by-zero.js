`use strict`



// Készíts egy függvényt, ami kap egy számot,
// majd elosztja ezzel a számmal a tízet és
// kiírja az eredményt.
// Ha a bemeneti paraméter 0, azt írja ki, hogy 'hiba'

function divideByTen(number) {
    if (number === 0) {
        throw 'divide by zero';
    }
    return (10 / number);
}

try {
    console.log(divideByTen(0));

} catch (err) {
    console.log('hiba');
}



