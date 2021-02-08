//node package manager
//npm init a terminálba
//npm i express (express csomag telepitése, package.json-ba bekerül)
//npm i -g nodemon, utána file futtatás--> nodemon index.js, figyeli a változásokat
// npm run -->package.jsonben a scriptben lévő részt fogja kiirni
//-->test
//echo "Error: no test specified" && exit 1
/*"scripts": {
        "dev": "nodemon index.js",
        "prod": "node index.js"
        */
//ezeket is be lehet írni, futtatás: npm run dev/npm run prod





const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//első paraméter: útvonal
//handler functionök
app.get('/', function(req, res) {
    res.send('Hello World123')
});

app.listen(3000);