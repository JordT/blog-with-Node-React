import React from "react";
import "./DBGetForm.css";
import axios from "axios";
import DisplayBlog from '../DisplayBlog/DisplayBlog'
import { render } from "@testing-library/react";

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [id, setID] = React.useState("");
  var [name, setName] = React.useState(["test", "test2"]);
  var [city, setCity] = React.useState("");

  const dbGet = (id) => {
    axios
      .get(`http://localhost:3001/blogger/${id}`)
      .then((res) => {
        // console.log(response.headers.name + "we're logging line 17")
        setName(res.data.name);
        setCity(res.data.city);
        // setName(res.name);
      });
      // return console.log(response + " on line 20");
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    dbGet(id);
    // No logo on the submit blog page so I have removed it.
    // props.logoSpeedUp();
  };
  
  const displayBlogs = (name, city) => {
    console.log(name)
    const render = []

    name.map((name, i)=>{ 
      return render.push(<DisplayBlog nameprop={name} />)
    })
    return render
  }

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
      <div className="dbDisplay">
        Name: {name}
      </div>
      <div className="dbDisplay">
        City: {city}
      </div>
      {displayBlogs(name, city)}
    </div>
  );
}
