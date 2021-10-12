// Simple server that returns hello world object on port 3005
// cd into server folder and run 'node index.js' to begin.
// navigate to http://localhost:3001/api
// I don't think the server refreshes if changes are made...

const express = require('express')
const app = express()
const port = 3001

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/api', (req, res) => {
  res.send({response : 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})