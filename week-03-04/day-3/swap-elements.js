'use strict';
// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

const name = ["Arthur", "Boe", "Chloe"];
let tmp = name[0];
name[0] = name [2]
name[2] = tmp;
console.log(name);
