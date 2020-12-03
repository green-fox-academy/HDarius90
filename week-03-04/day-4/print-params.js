

'use strict';
// - Hozz létre egy `printParams` függvényt, ami kiírja a konzolra
//   a bementi paramétereit (lehet több paramétere is)

printParams(1, 2, 3, 4);

function printParams() {
    let args = [...arguments];
    return console.log(args);
}