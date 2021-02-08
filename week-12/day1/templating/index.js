'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

// kezdőoldal
app.get('/', (req, res) => {
    // jelenítse meg a `home.ejs`-t
    res.render('home', {
        title: 'Hello Word',
        section: 'new section on the board',
        div: 'this is a div'

    });
});

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
    console.log(`Az app a ${PORT}-s port-on fut.`);
});