'use strict';

/* Készíts egy Animal osztályt
Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel */

class Animal {
    hunger;
    thirst;
    happiness;

    eat() {
        this.hunger -= 1;
    }
    drink() {
        this.thirst -= 1;
    }

    play() {
        this.thirst += 1;
        this.hunger += 1;
    }

    constructor(){
        this.hunger = 50;
        this.thirst = 50;
        this.happiness = 50;
    }
}


let firstAnimal= new Animal();
firstAnimal.drink();
firstAnimal.eat();
firstAnimal.play();

console.log(firstAnimal);

export default Animal;