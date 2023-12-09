const express = require('express');
const app = express();
const port = 3005

app.get('/', (req, res) => {
  res.send(`Hello from gaming service`);
});

app.listen(port, () => {
  console.log(`Gaming service listening on port http://127.0.0.1:${port}/`);
});