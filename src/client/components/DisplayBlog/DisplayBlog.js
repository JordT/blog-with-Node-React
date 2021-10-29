import React from "react";
import './DisplayBlog.css'

const DisplayBlog = (props) => {
    return (
        <div>
            <div> Name = {props.nameprop}</div>
            <div>City = {props.cityprop}</div>
            <div>Blog = {props.blogprop}</div>
            <div>ERROR: {props.err}</div>
        </div>
    )
}

export default DisplayBlog;