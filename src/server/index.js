// Simple server that returns hello world object on port 3005
// cd into server folder and run 'node index.js' to begin.
// navigate to http://localhost:3001/api
// I don't think the server refreshes if changes are made...

const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Blogger = require("/Users/adamheeps/development/blog-with-Node-React/src/models/Blogger.js");

const app = express()
const port = 3001
const db = "mongodb://localhost/blogdb";

app.use(function (req, res, next) {
  // Authorizing API call to come from React front end on port 3000
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(
  bodyParser.urlencoded({
      extended: false
  })
);

app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

app.get('/api', (req, res) => {
  res.send({response : 'Hello World!'})
})

app.post("/blogger", (req, res) => {

  const newBlogger = new Blogger({
      name: req.body.name,
      city: req.body.city
  });

Blogger.create(newBlogger)
  .then(function(db) {
      console.log(db);
      res.json(db);
  })
  .catch(function(err) {
      console.log(err);
      res.json(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})