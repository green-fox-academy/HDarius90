'use strict';

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

//app.set('view engine', 'ejs'); //igy állitjuk át ejs-re

//itt állítom be, h a mappán belűli public mappában lévő elemeket is elérje a /assetsen keresztül
//--> http://localhost:3000/assets/style.css
//a html össze van kötve a style.css-szel
app.use('/assets', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log(`server listens on port ${port}`)
});