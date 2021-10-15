import React from "react";
import './DBPostForm.css'

const DBPostForm = () => {

    return (
        <div className="DBPostForm">
            <h3>Post a record to the database:</h3>
            <form>
            <label>
                Name: <input type="text" name="name" />
                City: <input type="text" city="city" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
)}

export default DBPostForm;