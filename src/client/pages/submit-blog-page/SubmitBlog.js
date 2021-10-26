import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBPostForm from "../../components/DBPostForm/DBPostForm";
import '../../App.css'

const SubmitBlog = () => {

    return (
        <div className='App'> 
        <Toolbar />
        <DBPostForm/>   
        </div>)
    
}

export default SubmitBlog;