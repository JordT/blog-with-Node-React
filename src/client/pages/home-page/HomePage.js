// site landing page

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Logo from "../../components/Logo/Logo";
import './HomePage.css'


const HomePage = (props) => {

    return (
        <div className="App"> 
            <Toolbar activePage={props.activePage}/>
            <p className="whitetext">This simple blog application allows users to submit a blog post and return blogs by author.</p>
            <p className="whitetext">It was created by <a className="whitetext" href="https://github.com/JordT">Jordan</a> and <a className="whitetext" href="https://github.com/mr-jackpot">Adam</a> as a learning experience, using the popular MERN stack.</p>
            <p className="whitetext">You can see the code behind this site <a className="whitetext" href="https://github.com/JordT/blog-with-Node-React">here.</a></p>
            <p className="whitetext">Please note, as a learning exercise this is not production grade code. It therefore has some notable exclusions, such as unit testing etc.</p>
            <header className="App-header">
                <Logo speed={props.speed} />
            </header>
        </div>)
    
}

export default HomePage;