import Lollipop from './Lollipop.js';
import HardCandy from './HardCandy.js';

export default class CandyShop {
    sugar = 0;
    income = 0;
    inventory = [];
    sugarUnitPrice = 600

    constructor(amountOfSugar) {
        this.sugar = amountOfSugar;
    }

    createCandy(candy) {
        const sugarNeeded = candy.getSugar();
        if (this.sugar < sugarNeeded) {
            throw new Error('Nincs elég cukor');
        }
        this.inventory.push(candy);
        this.sugar -= sugarNeeded;

    }

    raisePrice(amount) {
        this.inventory.forEach((candy) => {
            candy.increasePrice(amount);
            //   candy.setPrice(candy.getPrice() + amount);
        });
    }

    sell(amountShouldBeSold) {
        const amountCanBeSold = this.inventory.length;
        let amountToBeSold = Math.min(amountCanBeSold, amountShouldBeSold);

        const candiesToBeSold = this.inventory.splice(0, amountToBeSold);

        candiesToBeSold.forEach((candy) => {
            this.income += candy.getPrice();
        });

        /*
        let amountToBeSold = 0;
        if (amountCanBeSold >= amountShouldBeSold) {
             amountToBeSold = amountShouldBeSold;
        } else {
             amountToBeSold = amountCanBeSold;
        }

        for (let i = 0; i < amountToBeSold; i++) {
            this.income+= this.inventory[0].getPrice();
            this.inventory.shift();
        }*/



    }

    buySuger(amountInKG) {
        const priceOfSugar = amountInKG * this.sugarUnitPrice;
        if (this.income < priceOfSugar) {
            throw new Error('Nincs elég della');
        }
        this.sugar += amountInKG * 1000;
        this.income -= priceOfSugar;
    }

    toString() {
        let output = '';
        let hardCandyCount = 0;
        let LollipopCount = 0;
        this.inventory.forEach((candy) => {
            if (candy instanceof Lollipop) {
                LollipopCount++;
            } else if (candy instanceof HardCandy) {
                hardCandyCount++;
            }
        });
        output+= `Készlet: ${hardCandyCount} cukorka, ${LollipopCount} nyalóka; Bevétel: ${this.income} Ft; Cukor: ${this.sugar} gramm`

        return output;
    }
}