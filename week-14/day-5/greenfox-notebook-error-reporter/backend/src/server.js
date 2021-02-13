'use strict';

import express from 'express';
import cors from 'cors';


const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.post('/tickets', (req, res) => {
  const reqData = req.body;

  res.json([{ "tag": "Hello" }]);
});


app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}.`);
});
