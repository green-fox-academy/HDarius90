/* Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
backgroundColor
text
textColor
Készíts néhány példa post-it objektumot:
egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
egy sárgát zöld szöveggel: "1 liter tej!" */

'use strict';

class PostIt {
    backgroundColor;
    text;
    textColor;

    constructor (backgroundColor, textColor, text){
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.text = text;
    }
}

console.log(new PostIt('orange','blue', 'Egy, megerett a meggy'));
console.log(new PostIt('pink', 'black', 'Ketto, csipkebokor vesszo'));
console.log(new PostIt('yellow', 'green', '1 liter tej!'));