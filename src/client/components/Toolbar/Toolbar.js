import React from "react";
import './Toolbar.css'

const Toolbar = () => {
    return (
        <div className="ToolbarContainer">
            <div class="Dropdown-menu">Menu</div>
                <h1 className="h1">Home</h1>
                <h1 className="h1">About</h1>
                <h1 className="h1">Blog Entries</h1>
        </div>
    )
}

export default Toolbar;