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
        // console.log(res)
        // console.log(res.data[0].city)
        // console.log(res.data[1].city)
        
        const data = res.data
        const objArr = []

        data.map((arr) => {
          objArr.push({
            SampName: arr.name,
            SampCity: arr.city,
            SampBlog: arr.blog
          })
          // console.log("City = ")
          // console.log(arr.city)
        })
        setBlogData(objArr)
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
      // console.log(blogData.SampName)
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
