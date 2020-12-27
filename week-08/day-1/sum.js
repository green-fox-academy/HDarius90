'use strict';


/* Készíts egy sum függvényt az osztályodban, amely bemeneti paraméterként számokból álló tömböt vár.
A függvény adja össze a lista elemeit és térjen vissza az összeggel.
Kövesd az alábbi lépéseket:
Hozz létre egy új tesztesetet!
Példányosítsd az osztályodat!
Hozz létre egy számokból álló tömböt!
Használd a t.equal() függvényt az általad létrehozott sum függvény tesztelésére!
Futtasd le a tesztet!
Készíts további teszteket, ahol ezekkel a paraméterekkel teszteld:
üres tömb
egy elemű tömb
több elemű tömb
null
szöveges tömb
Futtasd le a teszteket!
Javítsd a kódodat ha szükséges! */

class MyClass  {
    sum (array){
        if(array === null){
            return null;
        }
        if(array.length === 0){
            return 0;
        }
        let arraySum = array[0];
        for(let i = 1; i < array.length; i++){
            arraySum += array[i];
        }
        return arraySum;
    }
}



export default MyClass;