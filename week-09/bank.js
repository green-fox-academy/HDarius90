"use strict";


class Currency {

    constructor(code, centralBankName, value){
        this.code = code;
        this.centralBankName = centralBankName;
        this.value = value;
    }
}

class USADollar extends Currency {

    super('USD', 'Federal Reserve System');
}

console.log(new USADollar);