// import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Logo from './components/Logo/Logo.js'
import Toolbar from "./components/Toolbar/Toolbar";
import DBPostForm from "./components/DBPostForm/DBPostForm";

function App() {

  const [logoSpeed, setLogoSpeed] = React.useState("App-logo");

  return (
    <div className="App">
      <Toolbar />
      <DBPostForm test={setLogoSpeed}/>
      <header className="App-header">
        <Logo speed={logoSpeed}/>
        {/* commented out as created replacement component */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

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
  );
}

export default App;
