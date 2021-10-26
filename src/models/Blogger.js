const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Blogger schema
const BloggerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  blogText: {
    type: String, 
    required: true
  }
});

module.exports = Blogger = mongoose.model("Bloggers", BloggerSchema);