import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBPostForm from "../../components/DBPostForm/DBPostForm";
import './SubmitBlog.css'
import '../../App.css'

const SubmitBlog = (props) => {

    return (
        <div className='App'> 
            <Toolbar activePage={props.activePage}/>
            <div>
                <DBPostForm/>
            </div>   
        </div>)
    
}

export default SubmitBlog;