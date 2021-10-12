// Simple server that returns hello world object on port 3005
// cd into server folder and run 'node index.js' to begin.
// navigate to http://localhost:3005/api
// I don't think the server refreshes if changes are made...

const express = require('express')
const app = express()
const port = 3005

app.get('/api', (req, res) => {
  res.send({response : 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})