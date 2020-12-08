`use strict`





// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

const fs = require('fs');


fs.appendFileSync('./my-file.txt', '\nDari');

function printFileCountent(fileName) {
    try {
        const fileContent = fs.readFileSync(fileName);

        console.log(fileContent.toString());
    } catch (err) {
        console.log('\x1b[31m' + 'Unable to write file: my-file.txt' + '\x1b[0m');
    }
}

printFileCountent('./my-file.txt');