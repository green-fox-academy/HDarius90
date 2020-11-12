'use strict';

const a = 24;
let out = 0;
// Ha a páros, növeld az out változó értékét 1-gyel
if (a % 2 == 0){
    out++;
}

console.log(out);


const b = 13;
let out2 = '';
// Ha b 10 és 20 között van, akkor az out2 legyen 'Édes!'
// Ha b kevesebb, mint 10, out2 legyen 'Kevés!'
// Ha b több, mint 20, out2 legyen 'Sok!'
if (b < 10){
    out2 = "Kevés!";
}else {
    if(b <= 20){
        out2 = "Édes!";
    }else {
        out2 = "Sok!";
    }
}

console.log(out2);


let c = 123;
const credits = 100;
const isBonus = false;
// Ha credits legalább 50,
// és isBonus hamis, c legyen csökkentve 2-vel
// Ha credits kisebb, mint 50,
// és isBonus hamis, c legyen csökkentve 1-gyel
// Ha isBonus igaz, c ne változzon


if (credits >= 50 && isBonus == false){
    c = c - 2;
}
if (credits < 50 && isBonus == false){
    c = --c;
}
if (isBonus == true){
  c = c; 
}

console.log(c);


const d = 8;
const time = 120;
let out3 = '';
// Ha d osztható 4-gyel
// és a time nem több, mint 200
// out3 legyen 'check'
// Ha time nagyobb, mint 200
// out3 legyen 'Az idő lejárt!'
// különben out3 legyen 'Fuss, Forest, Fuss!'

if(d % 4 == 0 && time <= 200){
    out3 = 'check'
}else{
if(time > 200){
    out3 = 'Az idő lejárt!'
}else{
    out3='Fuss, Forest, Fuss!'
}
}


console.log(out3);