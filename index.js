const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from the test! This commit is to see whether or not the deployment automatically updates with each push!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
