import React from "react";
import "./DBGetForm.css";
import axios from "axios";
import DisplayBlog from '../DisplayBlog/DisplayBlog'

export default function DBPostForm(props) {

  var [getName, setGetName] = React.useState("");
  const [blogData, setBlogData] = React.useState('Sorry, that name cannot be found.')

  const dbGet = (getName) => {
    axios
      .get(`http://localhost:3001/blogger/${getName}`)
      .then((res) => {
        const data = res.data
        const objArr = []
        
        data.map((arr) => {
          objArr.push({
            objName: arr.name,
            objCity: arr.city,
            objBlog: arr.blogText
          })
        })
        return setBlogData(objArr)
      });   
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    dbGet(getName);
  };
  
  const displayBlogs = (data) => {
    // mapping through an array of objects to allow mutliple blogs to be returned.
    const render = []

    if (blogData === 'Sorry, that name cannot be found.') {
      return render.push(<DisplayBlog err={blogData}/>)
    }

    data.map((blogData) => {
      return render.push(<DisplayBlog nameprop={blogData.objName} cityprop={blogData.objCity} blogprop={blogData.objBlog}/>) 
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
            name="getName"
            value={getName}
            onChange={(n) => setGetName(n.target.value)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {displayBlogs(blogData)}
    </div>
  );
}
