`use strict`

// Készíts egy függvény, ami dekódolja a reversed-lines.txt tartalmát

const fs = require('fs');




function readReverse(fileName) {
    try {
        const fileContent = fs.readFileSync(fileName);
        console.log(fileContent.reverse().toString());
      
    } catch (err) {
        console.log('\x1b[31m' + 'Unable to read file: reversed-line.txt' + '\x1b[0m');
    }
}

readReverse('./reversed-line.txt');