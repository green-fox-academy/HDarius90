`use strict`

//Írj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'

const fs = require('fs');

function printFileCountent(fileName) {
    try {
        const fileContent = fs.readFileSync(fileName);

        console.log(fileContent.toString());
    } catch (err) {
        console.log('\x1b[31m' + 'Unable to read file: my-file.txt' + '\x1b[0m');
    }
}

printFileCountent('./my-file.txt');