const express = require('express')
const app = express()
const port = 3005

app.get('/api', (req, res) => {
  res.send({response : 'Hello World!'})
  res.send(console.log("You've called the api"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})