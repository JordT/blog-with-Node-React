import React from "react";
import "./DBPostForm.css";
import axios from "axios";

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [name, setName] = React.useState("");
  var [city, setCity] = React.useState("");
  var [blogText, setBlogText] = React.useState("");

  const blogger = {
    "name": name,
    "city": city,
    "blogText": blogText
};

const dbPost = (b) => {
    axios
      .post("http://localhost:3001/blogger", b)
      .then(() => console.log("User Created"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dbPost(blogger);
    // No logo on the submit blog page so I have removed it.
    // props.logoSpeedUp();
  };

  return (
    <div className="DBPostForm">
      <h3>Post a record to the database:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name field"
            value={name}
            onChange={(n) => setName(n.target.value)}
            required
          />
          City:
          <input
            type="text"
            name="city field"
            value={city}
            onChange={(c) => setCity(c.target.value)}
          />
          Your blog:
          <input
            type="text"
            name="blog field"
            value={blogText}
            onChange={(c) => setBlogText(c.target.value)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
