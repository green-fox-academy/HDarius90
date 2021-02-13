'use strict';

import express from 'express';

const PORT = 3001;
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(PORT, () => {
  console.log(`Frontend running, and listening on port ${PORT}.`);
});
