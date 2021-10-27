import React from "react";

const DisplayBlog = (props) => {
    return (
        <div >
            <div>Name = {props.nameprop}</div>
            <div>City = {props.cityprop}</div>
            <div>Blog = {props.blogprop}</div>
        </div>
    )
}

export default DisplayBlog;