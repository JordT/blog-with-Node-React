import React from "react";
import "./DBGetForm.css";
import axios from "axios";
import DisplayBlog from '../DisplayBlog/DisplayBlog'

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [id, setID] = React.useState("");
  var [name, setName] = React.useState(["test1", "test2"]); // mock data for testing
  var [city, setCity] = React.useState("");
  const [blogData, setBlogData] = React.useState([])

  // sample input object
  const sampData = [
    {SampName: "Test1",
    SampCity: "test1",
    SampBlog: "This is my blog"
  },
    {SampName: "Test2",
    SampCity: "Test2",
    SampBlog: "This is my second blog"
  }];

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
  
  const displayBlogs = (sampData, i) => {
    //mapping through an array of objects to allow mutliple blogs to be returned.
    const render = []

    sampData.map((sampData) => {
      console.log(sampData.SampName)
      return render.push(<DisplayBlog nameprop={sampData.SampName} cityprop={sampData.SampCity} blogprop={sampData.SampBlog} />) 
    })
    return render;
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
      {displayBlogs(sampData)}
    </div>
  );
}
