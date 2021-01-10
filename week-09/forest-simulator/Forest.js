import WhitebarkPine from './WhitebarkPine.js';
import FoxtailPine from './FoxtailPine.js';


export default class Forest {

    treesInForest = [];
    constructor(listOfTrees) {
        for (let i = 0; i < listOfTrees.length; i++) {
            if (listOfTrees[i] === 'WhitebarkPine') {
                this.treesInForest.push(new WhitebarkPine());
            } else {
                if (listOfTrees[i] === 'FoxtailPine') {
                    this.treesInForest.push(new FoxtailPine());
                }
            }
        }
    }

    rain() {
        this.treesInForest.forEach((tree) => {
            tree.irrigate();
        });
    }

    cutTrees(lumberjack) {
        for (let i = 0; i < this.treesInForest.length; i++) {
            if (lumberjack.canCut(this.treesInForest[i])) {
                this.treesInForest.splice(i, 1);
                i--;
            }
        }
    }


    isEmpty() {
        if (this.treesInForest.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    getStatus() {
        let stat = [];
        this.treesInForest.forEach((tree) => {
            stat.push(`There is a ${tree.height} tall ${tree.getName()} in the forest.`);
        });

        return stat;
    }

}
