import React from "react";
import './DisplayBlog.css'

const DisplayBlog = (props) => {
    
    if (props.nameprop.length > 1) {
    return (
        <div>
            <div> Name = {props.nameprop}</div>
            <div>City = {props.cityprop}</div>
            <div>Blog = {props.blogprop}</div>
        </div>
    )}
    return (<div>{props.err}</div>) 
}

export default DisplayBlog;