'use strict';

let express = require('express');
let app = express();
let fs = require('fs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    fs.readFile('./character.json', (err, file) => {
        const characters = JSON.parse(file);
        //(specializeHTML, adat) -> HTML
        res.render('index', { characters: characters });
    })

});

app.listen(4000, () => console.log('Example app listening on port 4000!'));