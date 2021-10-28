import React from "react";
import "./DBPostForm.css";
import axios from "axios";

export default function DBPostForm(props) {

  //improvement suggestion - could our state could be stored directly in a blogger object?
  var [name, setName] = React.useState("");
  var [city, setCity] = React.useState("");
  var [blogText, setBlogText] = React.useState("");
  var [id, setID] = React.useState("");

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
    // No logo on the submit blog page so I have removed it.
    // props.logoSpeedUp();
  };

  return (
    <div className="DBPostForm">
      <h3>Submit a blog!</h3>
      <form onSubmit={handleSubmit}>
        <div className='user-input'>
          <label>
          Name:___
          <input
            type="text"
            name="name field"
            value={name}
            onChange={(n) => setName(n.target.value)}
            className='input-box'
            required
            placeholder="Enter your name"
            maxlength="25"
          />
        </label>
        </div>
        <div className='user-input'>
          <label>
          City:_____
          <input
            type="text"
            name="city field"
            value={city}
            onChange={(c) => setCity(c.target.value)}
            className='input-box'
            placeholder="Enter where you live"
            maxlength="25"
          />
          </label>
          </div>
          <div className='user-input'>
          <label>
          Your blog:
          <textarea
            type="text"
            name="blog field"
            value={blogText}
            onChange={(c) => setBlogText(c.target.value)}
            className='input-box-blogtext'
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
        ID: {id}
      </form>
    </div>
  );
}
