import Forest from './Forest.js';
import Lumberjack from './Lumberjack.js';
import Tree from './Tree.js';
import Trees from './Tree.js';
import WhitebarkPine from './WhitebarkPine.js';

const jancsi = new Lumberjack();
const myForest = new Forest(['WhitebarkPine','FoxtailPine','WhitebarkPine','FoxtailPine','WhitebarkPine','FoxtailPine']);

myForest.rain();
myForest.rain();


myForest.cutTrees(jancsi);

console.log(myForest);
console.log(myForest.isEmpty());
console.log(myForest.getStatus());