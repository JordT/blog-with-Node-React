import React from "react";
import './Toolbar.css'

const Toolbar = () => {
    return (
        <div className="ToolbarContainer">
            <div class="Dropdown-menu">Menu</div>
                <a className="h1" href="http://localhost:3000/">Home</a>
                <a className="h1" href="http://localhost:3000/about">About</a>
                <a className="h1" href="http://localhost:3000/blog">Blog Entries</a>
        </div>
    )
}

export default Toolbar;