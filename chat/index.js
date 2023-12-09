const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
  res.send(`Hello from Chat service!`);
});

app.get('/list', (req, res) => {
  res.send(`You dont have anyone to talk😁`);
});

app.listen(port, () => {
  console.log(`Chat service listening on port http://127.0.0.1:${port}/`);
});