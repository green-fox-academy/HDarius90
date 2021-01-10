import Tree from './Tree.js';

export default class FoxtailPine extends Tree{
    constructor(height=0) {
        super(height);
        this.irrigateAmount = 1;
    }

    getName(){
        return 'FoxtailPine';
    }
}