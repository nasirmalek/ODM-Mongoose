const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send("Server ready")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
