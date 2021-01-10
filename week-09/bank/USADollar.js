import Currency from './Currency.js';
export default class USADollar extends Currency {
    constructor(value=0){
        super('USD', 'Federal Reserve System', value);
    }
}