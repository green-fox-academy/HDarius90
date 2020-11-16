'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

let row = [];
let line = 4;
let matrix = [];
let placeOFOne = line - 1;

for (let i = 0; i < line; i++) {
    for (let j = 0; j < line; j++) {
        row[j] = 0;
    }
    row[placeOFOne] = 1;
    placeOFOne = placeOFOne - 1;
    matrix[i] = [...row];
}

for (let i = 0; i < line; i++) {


    console.log(matrix[i]);
}

