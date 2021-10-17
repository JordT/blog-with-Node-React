import React from "react";
import "./DBPostForm.css";
import axios from "axios";
import Logo from '../Logo/Logo'

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored in a blogger object?

  var [name, setName] = React.useState("");
  var [city, setCity] = React.useState("");

  const blogger = {
    "name": name,
    "city": city
};

const dbPost = (b) => {
    axios
      .post("http://localhost:3001/blogger", b)
      .then(() => console.log("User Created"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dbPost(blogger);
    // How does this event handle change state in App.js?
    props.test("App-logo1")
  };

  return (
    <div className="DBPostForm">
      <h3>Post a record to the database:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="name"
            name="name"
            value={name}
            onChange={(n) => setName(n.target.value)}
            required
          />
          City:
          <input
            type="text"
            name="Name"
            value={city}
            onChange={(c) => setCity(c.target.value)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
