const express = require('express');
const app = express();
const port = 3003

app.get('/', (req, res) => {
  res.send(`Hello from video service`);
});

app.listen(port, () => {
  console.log(`Video service listening on port http://127.0.0.1:${port}/`);
});