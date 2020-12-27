
'use strict';
/* 
Készíts egy Sharpie osztályt
Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width (legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
Példányosításkor a color és a width legyenek kötelezően megadandóak
Minden példányosított filctoll inkAmount értéke legyen alapból 100
Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét */

class sharpie {


    constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
        if (this.color === undefined || isNaN(width) || this.color === '' || this.width === undefined || this.width === 0 || this.width === '' || isNaN(width)) {
            throw 'Hibás paraméter!'
        }
    }
    use() {
        this.inkAmount--;
    }
}

try {
    const bluepen = new sharpie('blue', 10);
    bluepen.use();
    console.log(bluepen);
} catch (e) {
    console.log(e);
}


