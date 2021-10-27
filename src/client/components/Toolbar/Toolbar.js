import React from "react";
import './Toolbar.css'

const Toolbar = (props) => {

    const [activePage, setActivePage] = React.useState("")
    setActivePage(props.activePage)

    return (
        <div className="ToolbarContainer">
            <div class="Dropdown-menu">Menu</div>
                <a className={`h1 ${activePage}`} href="http://localhost:3000/">Home</a>
                <a className={`h1 ${activePage}`} href="http://localhost:3000/blog">Blogs</a>
                <a className={`h1 ${activePage}`} href="http://localhost:3000/submitblog">Submit Blog</a>
        </div>
    )
}

export default Toolbar;