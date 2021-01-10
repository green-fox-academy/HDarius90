import { getRandomNumber } from './random.number.js';

'use strickt';

class Animal {
    name;
    isHealthy = false;


    constructor(ownerName, name = 'animal') {
        this.ownerName = ownerName;

        this.name = name;
    }

    heal() {
        this.isHealthy = true;
    }

    isAdoptable() {
        if (this.isHealthy === true) {
            return true;
        }
        return false;
    }

    toString() {
        if (this.isHealthy === true ? console.log(this.name + " is healthy, and adoptable") : console.log(this.name + ' is not healthy (<' + this.healCost + '>€), and not adoptable'));
    }

}






class Cat extends Animal {
    constructor(ownerName, name = 'animal') {
        super(ownerName, name);
        this.healCost = getRandomNumber(1, 5);
    }


}

class Dog extends Animal {
    constructor(ownerName, name = 'animal') {
        super(ownerName, name);
        this.healCost = getRandomNumber(2, 7);
    }


}

class Parrot extends Animal {
    constructor(ownerName, name = 'animal') {
        super(ownerName, name);
        this.healCost = getRandomNumber(5, 9);
    }


}


let animalShelter = {

    budget: 10,
    animalsList: [],
    adoptersName: [],
    healedAnimals: 0,
    newOwner: [],

    rescue(animal) {
        animalShelter.animalsList.push(animal);
        return console.log('Animals in shelter: ' + animalShelter.animalsList.length);

    },

    heal() {
        for (let i = 0; i < animalShelter.animalsList.length; i++) {
            if (animalShelter.animalsList[i].isHealthy === false && animalShelter.budget >= animalShelter.animalsList[i].healCost) {
                animalShelter.animalsList[i].isHealthy = true;
                animalShelter.healedAnimals++;
                animalShelter.budget -= animalShelter.animalsList[i].healCost;
                break;
            }

        }
    },

    addAdopter(name) {
        animalShelter.newOwner.push(name);
    },

    findNewOwner() {
        let healthyExist = false;
        for (let i = 0; i < animalShelter.animalsList.length; i++) {
            console.log(animalShelter.animalsList[i].isAdoptable());
            if (animalShelter.animalsList[i].isAdoptable() === true) {
                healthyExist = true;
                break;
            }
        }
        if (healthyExist === false) {
            return console.log('There is no adoptable animal rightnow. :(');
        } else {
            if (animalShelter.newOwner.length <= 0) {
                return console.log('There is no new owner rightnow. :(');
            } else {
                let indexOfOwner = getRandomNumber(0, animalShelter.newOwner.length - 1);
                animalShelter.newOwner.splice(indexOfOwner, 1);
            }

            let indexOfAnimal = getRandomNumber(0, animalShelter.animalsList.length - 1);
            do {
                indexOfAnimal = getRandomNumber(0, animalShelter.animalsList.length - 1);
            } while (animalShelter.animalsList[indexOfAnimal].isAdoptable() === false);

            animalShelter.animalsList.splice(indexOfAnimal, 1);
        }



    },

    earnDonation(amount){
        animalShelter.budget += amount;
        return animalShelter.budget;
    },

    toString(){
        console.log(`Budget: <${this.budget}>€, \n There are <${animalShelter.animalsList.length}> animal(s) and <${animalShelter.newOwner.length}> potential adopter(s)`);
        for (let i = 0; i < animalShelter.animalsList.length; i++){
            animalShelter.animalsList[i].toString(); 
        }
    }
}





let cat = new Cat('Dari', 'Nyunyu');
let dog = new Dog('Dari', 'Bonie');
let parrot = new Parrot('Dari', 'Ccsőrike');

animalShelter.rescue(cat);
animalShelter.rescue(dog);
animalShelter.rescue(parrot);
animalShelter.heal();
animalShelter.heal();
animalShelter.heal();
animalShelter.addAdopter('Sziszi');
animalShelter.addAdopter('Lilu');
animalShelter.addAdopter('Dari');

console.log('Current Budget: ' + animalShelter.earnDonation(100));

console.log(animalShelter);
animalShelter.toString();
/*
console.log('Adoptálható: ' + cat.isAdoptable());
cat.toString();
cat.heal();
console.log('Health: ' + cat.isHealthy);
console.log('Adoptálható: ' + cat.isAdoptable());
cat.toString();
*/

/*animalShelter.rescue(cat);
animalShelter.rescue(dog);
animalShelter.rescue(parrot);
animalShelter.heal();
animalShelter.heal();
animalShelter.addAdopter('Sziszi');
animalShelter.findNewOwner();

console.log('Current Budget: ' + animalShelter.earnDonation(100));

animalShelter.toString();
*/



