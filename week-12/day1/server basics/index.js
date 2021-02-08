'use strict';

const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (reg, res) => {
    res.render('home', { user: { name: 'Green Fox' } });
})

app.use('./public', express.static('public'));

app.listen(port, () => {
    console.log(`The app listening at http://localhost:${port}`);
})

//oldalam.hu/blog?kulcs=ertek&kulcs2=ertek2