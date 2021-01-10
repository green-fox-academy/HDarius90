export default class Tree {
    height;
    irrigateAmount = 0;

    constructor(height){
        this.height = height;
    }

    irrigate () {
        this.height += this.irrigateAmount;
    }

}