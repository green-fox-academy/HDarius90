export default class Currency {
    code;
    centralBankName;
    value = 0;
    constructor(code,centralBankName, value){
        this.code = code;
        this.centralBankName = centralBankName;
        if(value < 0){
            throw new Error('Az érték nem lehet negatív szám');
        }
        this.value = value;
    }
} 