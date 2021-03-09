//person.js

const person = {
    name: "Töhötöm"
}

export default person;

//-----------------

//tools.js

export const fuggveny = () => {
    return true;
};
export const width = 1280;

//-------------------

//app.js

import person from './person.js';
import szem from './person.js'; //bárhogy elnevezhetem mert default

import { width } from './tools.js';
import { width as w } from './tools.js';
import * as cuccok from './tools.js';
//mindent importál és onnantól pl cuccok.width-ként lehet rá hivatkozni