// Page where you can view blogs

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBGetForm from '../../components/DBGetForm/DBGetForm';
import '../../App.css'


const BlogPage = () => {

    return (
        <div> 
        <Toolbar />
        <DBGetForm />
        </div>)
    
}

export default BlogPage;