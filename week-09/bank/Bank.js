import BankAccount from './BankAccount.js';
export default class Bank {
    bankAccount = [];

    createAccount(accountCurrency) {
        this.bankAccount.push(new BankAccount(accountCurrency));
    }

    getAllMoney() {
        let allMoney = 0;
        this.bankAccount.forEach((account) => {
            allMoney += account.getValue();
        });

        return allMoney;
    }
}