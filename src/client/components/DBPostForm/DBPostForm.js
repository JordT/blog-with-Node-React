import React from "react";
import "./DBPostForm.css";
import App from "../../App.js";

export default function DBPostForm() {
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${name} ${city}`);
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
