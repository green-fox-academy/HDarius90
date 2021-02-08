'use strict';

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); //igy állitjuk át ejs-re
app.set('viewes', 'randomCica');


//bármilyen middlelwaret képes elfogadni

//app.use(express.static('public'));
//app.use('./static', express.static('public'));
app.use('/static', express.static(path.join(__dirname + './public')));



app.get('./myFirstEndpoint', (req, res) => {
    res.send('My first endpoint responded');
});

app.get('/endPointWithQueryString', (req, res) => {
    let html = '<ul>';

    for (let key in req.query) {
        html += `<li>${key}: ${req.query[key]}</li>`;
    }

    html += '</ul>';
    req.send(html);
});

//url végére--> /greet/Greenfox--> kiirja hogy hellobello Greenfox
app.get('/greet/:name', (req, res) => {
    let html = `<h1>Hellobello ${req.params}!</h1>`;

    req.send(html);
});

//ezek helyett a fenti public.static
//app.get('./cica.JPG', (req, res) => {
//   res.sendFile(`${__dirname}/puplic/cica.JPG`)
//})

//app.get('./index.html', (req, res) => {
//    res.sendFile(`${__dirname}/puplic/index.html`)
//})

app.get('/randomCica', (req, res) => {
    res.render('randomCica', { number: 5 });
});


app.listen(port, () => {
    console.log(`server listens on port ${port}`)
});