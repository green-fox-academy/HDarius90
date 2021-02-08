'use strict';

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));


const app = express();
const PORT = 3030;

const todos = ['get up', 'survive', 'go back to bed'];

app.set('view engine', 'ejs');


app.get('/:todos', (req, res) => {

    res.render('home', {
        title: 'Thing to do today:',
        todos
    });
});


app.listen(PORT, () => {
    console.log(`Az app a ${PORT}-s port-on fut.`);
});