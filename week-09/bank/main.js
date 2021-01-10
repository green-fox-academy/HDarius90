import Bank from './Bank.js';
import BankAccount from './BankAccount.js';
import USADollar from './USADollar.js';



/* try { 
    let otpAccount = new BankAccount('USD')
    otpAccount.deposit(50);
    otpAccount.deposit(50);
    console.log(otpAccount.withdraw(1234,90));
    console.log(otpAccount);

} catch (error){
    console.error(error.message);
} */

let otp = new Bank;
otp.createAccount('USD');
otp.bankAccount[0].deposit(100);
otp.createAccount('USD');
otp.bankAccount[1].deposit(200);
console.log(otp.bankAccount);
console.log(otp.getAllMoney());