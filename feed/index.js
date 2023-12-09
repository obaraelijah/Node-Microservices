const express = require('express');
const app = express();
const port = 3002

app.get('/', (req, res) => {
  res.send(`Hello from feed services!`);
});

app.listen(port, () => {
  console.log(`Feed service listening on port http://127.0.0.1:${port}/`);
});