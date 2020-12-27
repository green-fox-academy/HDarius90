/* Nézd meg a mappát. Találsz egy munkafájlt és egy teszt fájlt.
Futtasd a teszteket! Mind a 10 tesztnek zöldnek kell lennie (passing).
A munkafájl megvalósítása nem túl jó. Írj teszteket, amik megmutatják, hogy miért nem annyira jó! (Feltételezzük, hogy a join és a split megvalósítása rendben van.)
Miután megcsináltad a teszteket, javítsd ki a munkafájlt!
Ellenőrizd megint, tudsz-e létrehozni elbukó (failing) teszteket!
Javítsd a munkafájlt, ha szükséges! */

function add(a, b) {
    return a + b;
}

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } if (b >= a && b >= c) {
        return b;
    } if (c >= a && c >= b) {
        return c;
    }


};

function median(pool) {
    pool = pool.sort();
    if (pool.length % 2 === 0) {
        return (pool[pool.length / 2 - 1] + pool[pool.length / 2]) / 2;
    }
        return pool[Math.floor(pool.length / 2)];

}

function isVowel(c) {
    return ['a', 'u', 'o', 'e', 'i'].includes(c.toLowerCase());
}

function translate(hungarian) {
    let teve = hungarian.toLowerCase();
    let length = teve.length;

    for (let i = 0; i < length; i++) {
        let c = teve[i];
        if (isVowel(c)) {
            teve = teve.split(c).join(`${c}v${c}`);
            i += 2;
            length += 2;
        }
    }
    return teve;
}

export { add, maxOfThree, median, isVowel, translate };