'use strict';

/* A névjegyzékünket egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a nevek és a telefonszámok szöveges típusúak.

    Készíts egy Map-et az alábbi kulcs-érték párokkal:
    Név (kulcs) 	Telefonszám (érték)
    William A. Lathan 	405-709-1865
    John K. Miller 	402-247-8568
    Hortensia E. Foster 	606-481-6467
    Amanda D. Newland 	319-243-5613
    Brooke P. Askew 	307-687-2982

    Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
        Mi John K. Miller telefonszáma?
        Kinek a száma a 307-687-2982?
        Tudjuk-e Chris E. Myer telefonszámát?
 */

const phonebook = {
    name: ['William A. Lathan', 'John K. Miller', 'Hortensia E. Foster', 'Amanda D. Newland', 'Brooke P. Askew'],
    phonenumber: ['405-709-1865', '402-247-8568', '606-481-6467', '319-243-5613', '307-687-2982']
}

function giveMillersPhone(phonebook) {
    for (let i = 0; i < phonebook.name.length; i++) {
        if (phonebook.name[i] === 'John K. Miller') {
            console.log(phonebook.phonenumber[i]);
        }
    }
}

function giveWhosPhone(phonebook) {
    for (let i = 0; i < phonebook.phonenumber.length; i++) {
        if (phonebook.phonenumber[i] === '307-687-2982') {
            console.log(phonebook.name[i]);
        }
    }
}

function findCris(phonebook) {
    for (let i = 0; i < phonebook.name.length; i++) {
        if (phonebook.name[i] === 'Chris E. Myer') {
            if(phonebook.phonenumber[i] === undefined ? console.log('nincs meg cris száma') : console.log(phonebook.phonenumber[i]));
            return;
        }
        
    }
    console.log('Nem találtuk Crist.');
}

giveMillersPhone(phonebook);
giveWhosPhone(phonebook);
findCris(phonebook);