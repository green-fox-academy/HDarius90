import Tree from './Tree.js';

export default class WhitebarkPine extends Tree{
    constructor(height=0){
        super(height);
        this.irrigateAmount = 2;
    }


    getName(){
        return 'WhitebarkPine';
    }
}