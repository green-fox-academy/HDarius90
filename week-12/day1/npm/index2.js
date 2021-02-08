//  server.js
const express = require('express');
const app = express();
const port = 3000;

//  egy példa a public mappa tartalmának közzé tételére
app.use(express.static('public'));

// egy példa több mappa tartalmának közzé tételére
app.use(express.static('files1'));
app.use(express.static('files2'));

//  egy példa virtuális útvonal implementálására, abszolút útvonallal
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, (req, res) => {
    console.log(`a szerverünk a  ${port} porton fut`);
});