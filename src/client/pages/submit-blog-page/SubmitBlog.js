import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBPostForm from "../../components/DBPostForm/DBPostForm";
import DBGetForm from '../../components/DBGetForm/DBGetForm';
import '../../App.css'

const SubmitBlog = () => {

    return (
        <div className='App'> 
        <Toolbar />
        <DBPostForm/>   
        <DBGetForm />
        </div>)
    
}

export default SubmitBlog;