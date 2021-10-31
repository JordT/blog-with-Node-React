import React from "react";
import "./DBPostForm.css";
import axios from "axios";

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [blogText, setBlogText] = React.useState("");
  const [id, setID] = React.useState("");
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (category) => {
     setCategory(category);
     console.log(category);
 }

  const blogger = {
    "name": name,
    "city": city,
    "blogText": blogText
};

const dbPost = (b) => {
    axios
      .post("http://localhost:3001/blogger", b)
      .then((res) => {setID(res.data._id)});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dbPost(blogger);
  };

  return (
    <div className="DBPostForm">
      <h3>Submit a blog!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          <input
            type="text"
            name="name field"
            value={name}
            onChange={(n) => setName(n.target.value)}
            className='small-input'
            required
            placeholder="Enter your name"
            maxlength="25"
          />
        </label>
        </div>
        <div>
          <label>
            <select name="category" className='small-input' value={city} onChange={event => setCity(event.target.value)}>
              <option id="0" selected disabled value=''>Choose a city from the drop down list...</option>
              <option id="1" >Glasgow</option>
              <option id="2" >Edinburgh</option>
              <option id="3" >San Francisco</option>
              <option id="4" >Los Angeles</option>
              <option id="5" >London</option>
            </select>
          </label>
          </div>
          <div>
          <label>
          <textarea
            type="text"
            name="blog field"
            value={blogText}
            onChange={(c) => setBlogText(c.target.value)}
            className='large-input'
            required
            placeholder="Enter your blog here..."
            maxlength="1000"
            spellCheck="true"
            autoCorrect="on"
            wrap="soft"
          />
        </label>
        </div>
        <div>
        <input type="submit" value="Submit" className="SubmitButton"/>
        </div>
        {id}
      </form>
    </div>
  );
}
