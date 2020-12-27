import pkg from 'console-read-write';
const { read } = pkg;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


class CAB {

    constructor() {
        let numberOne = getRndInteger(0, 9);
        let numberTwo;
        let numberThree;
        let numberFour;
        do {
            numberTwo = getRndInteger(0, 9)
        }
        while (numberOne === numberTwo);
        do {
            numberThree = getRndInteger(0, 9)
        }
        while (numberThree === numberOne || numberThree === numberTwo);
        do {
            numberFour = getRndInteger(0, 9)
        }
        while (numberFour === numberOne || numberFour === numberTwo || numberFour === numberThree);

        this.field = numberOne.toString() + numberTwo.toString() + numberThree.toString() + numberFour.toString();
        this.state = true;
        this.guesses = 0;

    }

    guessing(numberFromPlayer) {
        let playedNumbers = numberFromPlayer.split('');
        let solution = this.field.split('');
        let returnValue = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (playedNumbers[i] === solution[i]) {
                    returnValue.push('Bull');
                    break;
                } else {
                    if (playedNumbers[i] === solution[j]) {
                        returnValue.push('Cow');
                    }
                }
            }
        }
        this.guesses++;
        if(JSON.stringify(returnValue) == JSON.stringify(['Bull','Bull','Bull', 'Bull'])){
            this.state = false;
            return 'WIN';
        }
        return returnValue;
    }

}

let game = new CAB();
while (game.state === true){
    console.log(game.guessing(await read()));
    console.log('Tippek száma: ' + game.guesses);
}

export default CAB;

