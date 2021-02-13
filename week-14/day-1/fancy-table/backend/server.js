import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.static('../'));


app.get('/', (req, res) => {
  res.sendFile('../index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running and listen on port ${PORT}...`);
});
