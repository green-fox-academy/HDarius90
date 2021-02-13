'use strict';

import express from 'express';
import ejs from 'ejs';
import path from 'path';

const app = express();
const PORT = 3100;


app.use(express.static('public'));


app.get('/tickets', (req, res) => {
  console.log('tickets');
  res.sendFile(path.resolve('public', 'tickets.html'));
});

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}.`);
});