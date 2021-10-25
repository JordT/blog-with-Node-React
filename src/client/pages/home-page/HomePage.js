// site landing page

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import DBPostForm from "../../components/DBPostForm/DBPostForm";
import DBGetForm from '../../components/DBGetForm/DBGetForm';
import Logo from "../../components/Logo/Logo";


const HomePage = () => {

    return (
        <div> 
            <Toolbar />
            <DBPostForm />   
            {/* logoSpeedUp={() => incLogoSpeed()} */}
            <DBGetForm />
            {/* logoSpeedUp={() => incLogoSpeed()} */}
            <header className="App-header">
                <Logo />
                {/* speed={logoSpeed} */}
            </header>
            <h1>The Home Page</h1>

            <p>
             Edit <code>src/App.js</code> and save to reload.
             </p>

        </div>)
    
}

export default HomePage;