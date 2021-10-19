import React from "react";
import "./DBGetForm.css";
import axios from "axios";

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [id, setID] = React.useState("");

  const dbGet = (id) => {
    axios
      .get(`http://localhost:3001/blogger/${id}`)
      .then(() => console.log("User Retrieved"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dbGet(id);
    // Here i've passed a function as props, this means you can set the speed here...
    props.logoSpeedUp();
  };

  return (
    <div className="DBGetForm">
      <h3>Get a record from the database:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Blogger ID:
          <input
            type="id"
            name="id"
            value={id}
            onChange={(n) => setID(n.target.value)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
