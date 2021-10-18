// import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Logo from './components/Logo/Logo.js'
import Toolbar from "./components/Toolbar/Toolbar";
import DBPostForm from "./components/DBPostForm/DBPostForm";
import about from '../../src/client/pages/about'
import {Switch, Route} from 'react-router-dom';

function App() {

  const [logoSpeed, setLogoSpeed] = React.useState("App-logo");

  const incLogoSpeed = () => {
    setLogoSpeed("App-logo1");
    setTimeout(() => {
        setLogoSpeed("App-logo")
    }, 1000);
  }

  return (
    <Switch>
      <Route path="/about" component={about}/>
      <div className="App">
        <Toolbar />
        <DBPostForm logoSpeedUp={() => incLogoSpeed()}/>
        <header className="App-header">
          <Logo speed={logoSpeed}/>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Switch>
  );
}

export default App;
