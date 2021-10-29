// Simple server that returns hello world object on port 3005
// cd into server folder and run 'node index.js' to begin.
// navigate to http://localhost:3001/api
// I don't think the server refreshes if changes are made...

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Blogger = require("../models/Blogger.js");

//Imports the database username and password from .config
const config = require("./config.js");

const app = express();
const port = 3001;
const db = `mongodb+srv://${config.username}:${config.password}@cluster0.dyqmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(function (req, res, next) {
  // Authorizing API call to come from React front end on port 3000
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Mongo connected @ ${db}`))
  .catch(err => console.log(err));

app.post("/blogger", (req, res) => {
  const newBlogger = new Blogger({
    name: req.body.name,
    city: req.body.city,
    blogText: req.body.blogText
  });

  Blogger.create(newBlogger)
    .then( dbProduct => {
      console.log(dbProduct)
      res.json(dbProduct)
    })
    .catch( err => {
      console.log(err)
      res.json(err)
    });
});

// Find one DB entry based on id
app.get("/blogger/:name", (req, res) => {
  Blogger.find({ name: req.params.name })
    .then( dbProduct => {
      console.log(dbProduct)
      if (dbProduct.length < 1) {
        res.json({error: 'The name cannot be found'})
      }
      else {
        res.json(dbProduct)
    }})
    .catch( err => {
      console.log("[server/index.js] Incorrect ID submitted")
      res.json(err)
    })
});

// Find one DB entry based on id
// app.get("/blogger/:id", (req, res) => {
//   Blogger.findOne({ _id: req.params.id })
//     .then(function (dbProduct) {
//       console.log(dbProduct);
//       res.json(dbProduct);
//     })
//     .catch((err) => {
//       console.log("[server/index.js] Incorrect ID submitted")
//       // console.log(err);
//       res.json(err);
//     });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
