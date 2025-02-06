const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from the test!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
