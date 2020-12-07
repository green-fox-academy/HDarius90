/* Tömbökkel fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.

    Készíts egy üres tömböt, ami szövegeket tartalmaz!
    Írasd ki a tömb elemeinek a számát!
    Add hozzá Williemet a tömbhöz!
    Írasd ki, hogy a tömb üres-e vagy sem!
    Add hozzá Johnt a tömbhöz!
    Add hozzá Amandát a tömbhöz!
    Írasd ki a tömb elemeinek a számát!
    Írasd ki a tömb harmadik elemét!
    Iterálj végig a tömbön, és írasd ki az összes nevet!

    William
    John
    Amanda

    Töröld a második elemet a tömbből!
    Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!

    Amanda
    William

    Távolítsd el a lista összes elemét!
 */
'use strict';

let names = ['Marky', 'Ricky', 'Danny', 'Terry', 'Mikey', 'Davey', 'Timmy', 'Tommy', 'Joey', 'Robby', 'Johnny', 'Brian'];
console.log('A tömb elemeinek száma: ' + names.length);
names.push('Williemet');
console.log('A tömb üres? ' + (names.length === 0));
names.push('John');
names.push('Amanda');
console.log('A tömb elemeinek száma: ' + names.length);
console.log('A harmadik elem: ' + names[2]);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.splice(2, 1);

for (let i = names.length - 1; i >= 0; i--) {
    console.log('2: ' + names[i]);
}

names.splice(0, names.length);
console.log(names);
