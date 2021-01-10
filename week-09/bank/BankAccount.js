import USADollar from './USADollar.js'
import HungarianForint from './HungarianForint.js'

export default class BankAccount {
    name;
    pinCode = 1234;
    currency;

    constructor(accountCurrency) {
        if (accountCurrency === 'USD') {
            this.currency = new USADollar();
        } else if (accountCurrency === 'HUF') {
            this.currency = new HungarianForint();
        } else throw new Error("Hibás devizanem");
    }

    getValue(){
        return this.currency.value;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error('Az érték nem lehet negatív szám');
        } else {
            this.currency.value += amount;
        }
    }

    withdraw(pin, amount) {
        if (pin != this.pinCode || amount > this.currency.value) {
            return 0;
        } else {
            this.currency.value -= amount;
            return amount;
        }
    }
}


