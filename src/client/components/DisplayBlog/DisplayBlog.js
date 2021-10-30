import React from "react";
import './DisplayBlog.css'

const DisplayBlog = (props) => {
    
    if (props.nameprop.length > 1) {
    return (
        <div className="blogContainer">
            <div className="indBlog">
                <div className="x">Name = {props.nameprop}</div>
                <div className="x">City = {props.cityprop}</div>
                <div className="x">Blog = {props.blogprop}</div>
            </div>
        </div>
    )}
    return (<div>{props.err}</div>) 
}

export default DisplayBlog;