import React from "react";
import "./DBGetForm.css";
import axios from "axios";
import DisplayBlog from '../DisplayBlog/DisplayBlog'

export default function DBPostForm(props) {
  const errMsg = 'ERROR: Name not found!'
  var [getName, setGetName] = React.useState("");
  const [blogData, setBlogData] = React.useState([])

  const dbGet = (getName) => {
    axios
      .get(`http://localhost:3001/blogger/${getName}`)
      .then((res) => {
        const data = res.data
        const objArr = []
        
        if (res.data.error != null) {
          return setBlogData(errMsg);
        }

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
    var render = []
    const errRender = '';
    if (data === errMsg) {
      return render = <DisplayBlog nameprop='' cityprop='' blogprop='' err={errMsg}/>;
    }

    data.map((blogData) => {
      return render.push(<DisplayBlog nameprop={blogData.objName} cityprop={blogData.objCity} blogprop={blogData.objBlog} err=''/>) 
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
