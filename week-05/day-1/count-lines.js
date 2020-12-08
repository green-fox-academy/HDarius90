`use strict`



// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

const fs = require('fs');

function printFileLines(fileName) {
    try {
        const fileContent = fs.readFileSync(fileName);
        const data = fileContent.toString();
        if (data === '') {
            return 0;
        } else {
            let linenumber = 1;
            for (let i = 0; i < data.length; i++) {
                if (data[i] === '\n') {
                    linenumber += 1;
                }
            }
            return linenumber;
        }

    } catch (err) {
        return 0;
    }


}

console.log(printFileLines('./my-file.txt'));