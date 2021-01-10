

export default class Lumberjack {

    canCut(tree) {
        if (tree.height > 4) {
            return true;
        } else {
            return false;
        }
    }

}