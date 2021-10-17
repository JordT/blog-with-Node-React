// import logo from "./logo.svg";
import "./App.css";
import Logo from './components/Logo/Logo.js'
import Toolbar from "./components/Toolbar/Toolbar";
import DBPostForm from "./components/DBPostForm/DBPostForm";

function App() {

  return (
    <div className="App">
      <Toolbar />
      <DBPostForm />
      <header className="App-header">
        <Logo />
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
