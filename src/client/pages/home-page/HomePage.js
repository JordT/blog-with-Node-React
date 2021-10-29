// site landing page

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Logo from "../../components/Logo/Logo";
import './HomePage.css'


const HomePage = (props) => {

    return (
        <div className="App"> 
            <Toolbar activePage={props.activePage}/>
            <header className="App-header">
                <Logo speed={props.speed} />
            </header>
        </div>)
    
}

export default HomePage;