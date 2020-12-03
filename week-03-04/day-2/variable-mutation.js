'use strict';


let a = 3;
// Növeld meg az "a" változó értékét 10-zel

a = a + 10,

console.log(a);

let b = 100;
// Csökkentsd a "b" változó értékeét 7-tel

b = b - 7;

console.log(b);

let c = 44;
// A c értéke legyen dupla akkora

c = c * 2;

console.log(c);

let d = 125;
// Oszd el a d-t 5-tel

d = d / 5;

console.log(d);

let e = 8;
// Emeld köbre az e változó értékét

e = e ** 2;

console.log(e);

const f1 = 123;
const f2 = 345;
// Logikai (boolean) értékként írasd ki hogy f1 nagyobb-e f2-nél
console.log(f1>f2);

const g1 = 350;
const g2 = 200;
// Mondja meg a program, hogy g2 duplája nagyobb-e g1-nél (boolean)
console.log(g1*2>g2);

const h = 1357988018575474;
// Mondja meg a program, hogy osztható-e 11-el maradék nélkül?
// Írasd is ki logikai (boolean) értékként
console.log(h%11==0);

const i1 = 10;
const i2 = 3;
// Mondja meg a program hogy i1 nagyobb-e i2 négyzeténél ÉS ugyanakkor kisebb-e i2 köbénél (boolean)
console.log(i1>i2**2&&i1<i2**3);

const j = 1521;
// Írasd ki, hogy j osztható-e 3-mal vagy 5-tel (boolean)
console.log(j%3==0||j%5==0);