'use strict';

import express, { json } from 'express';
import cors from 'cors';
import fs from 'fs';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/links', (req, res) => {
  try {
    const fileData = JSON.parse(manipulateFileData('GET', null));
    console.log(fileData);

    fileData.push(req.body);

    manipulateFileData('POST', JSON.stringify(fileData));

    res.json(fileData);

  } catch (err) {
    console.log('Hibás file olvasás, ', err.message);
    res.status(500);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Backend running, and listen on port ${PORT}.`);
});


function manipulateFileData(method, data) {
  const filePath = './data.json';

  if (method === 'GET') {
    return fs.readFileSync(filePath, 'utf-8');
  } else if (method === 'POST') {
    console.log(data);
    fs.writeFileSync(filePath, data, 'utf-8');
  }
}
