'use strict';

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));


const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

//http://localhost:3000/?name=Bogi
app.get('/', (req, res) => {
    let name = 'Guest';

    if (req.query.name !== undefined) {
        name = req.query.name;
    }
    res.render('home', {
        name

    });
});


app.listen(PORT, () => {
    console.log(`Az app a ${PORT}-s port-on fut.`);
});