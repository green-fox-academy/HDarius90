'use strict';

import cors from 'cors';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import swapWords from './demo.js';


const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 5000;

app.use(express.static('assets'));
app.use(express.json());


app.post('/sith', (req, res) => {

    let text = req.body.text;
    let output = '';

    if (text === undefined) {
        output = {
            "error": "Valami szöveget nekem adj, padawan. Hmm."
        }
    } else {
        output = {
            "sith_text": swapWords(text)
        }
    }
    res.send(output);
})



app.listen(port, () => {
    console.log(`App listens on ${port}.`);
});