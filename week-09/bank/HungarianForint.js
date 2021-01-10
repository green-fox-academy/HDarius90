import Currency from './Currency.js';
export default class HungarianForint extends Currency {
    constructor(value){
        super('HUF', 'Hungarian National Bank', value);
    }
}