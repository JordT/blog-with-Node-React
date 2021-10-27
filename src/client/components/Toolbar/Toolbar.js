/* eslint-disable no-unused-expressions */

import React from "react";
import './Toolbar.css'

var home = 'false';
var submit = 'false';
var blog = 'false';

const Toolbar = (props) => {
    
    switch (props.activePage) {
        case 'home':
            home = 'isActive';
            submit = 'false';
            blog = 'false';
            break;
           
        case 'submit':
            home = 'false';
            submit = 'isActive';
            blog = 'false';
            break;
        
        case 'blog':
            home = 'false';
            submit = 'false';
            blog = 'isActive';
            break;
    }
    
    return (
        <div className="ToolbarContainer">
            <div class="Dropdown-menu">Menu</div>
                <a className={`h1 ${home}`} href="http://localhost:3000/">Home</a>
                <a className={`h1 ${blog}`} href="http://localhost:3000/blog">Blogs</a>
                <a className={`h1 ${submit}`} href="http://localhost:3000/submitblog">Submit Blog</a>
        </div>
    )
}

export default Toolbar;