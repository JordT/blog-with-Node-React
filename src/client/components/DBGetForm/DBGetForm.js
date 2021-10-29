import React from "react";
import "./DBGetForm.css";
import axios from "axios";
import DisplayBlog from '../DisplayBlog/DisplayBlog'

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [id, setID] = React.useState("");
  var [name, setName] = React.useState(["test1", "test2"]); // mock data for testing
  var [city, setCity] = React.useState("");
  const [blogData, setBlogData] = React.useState([
  {
    SampName: "test1",
    SampCity: "This is my city"
  },
  {
    SampName: "Test1",
    SampCity: "This is my other city"
  }
  ])

  const dbGet = (id) => {
    axios
      .get(`http://localhost:3001/blogger/${id}`)
      .then((res) => {
        setName(res.data.name);
        setCity(res.data.city);
        
        // create array of objects w/ returned blog data
        const newArray = [];
        newArray.push({ 
          SampName: res.data.name,
          SampCity: res.data.city,
          SampBlog: ""
        })
        console.log(newArray) // **** It is adding this to the sample data, but not displaying it... *****//
        setBlogData(newArray)
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    dbGet(id);
    // No logo on the submit blog page so I have removed it.
    // props.logoSpeedUp();
  };
  
  const displayBlogs = (data, i) => {
    //mapping through an array of objects to allow mutliple blogs to be returned.
    const render = []

    data.map((blogData) => {
      console.log(blogData.SampName)
      return render.push(<DisplayBlog nameprop={blogData.SampName} cityprop={blogData.SampCity} blogprop={blogData.SampBlog} />) 
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
      {displayBlogs(blogData)}
    </div>
  );
}
