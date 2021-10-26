// site landing page

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBPostForm from "../../components/DBPostForm/DBPostForm";
import DBGetForm from '../../components/DBGetForm/DBGetForm';
import Logo from "../../components/Logo/Logo";
import './HomePage.css'


const HomePage = (props) => {

    return (
        <div className="App"> 
            <Toolbar />
            <DBPostForm />   
            {/* logoSpeedUp={() => incLogoSpeed()} */}
            <DBGetForm />
            {/* logoSpeedUp={() => incLogoSpeed()} */}
            <header className="App-header">
                <Logo speed={props.speed} />
                {/* speed={logoSpeed} */}
            </header>
        </div>)
    
}

export default HomePage;