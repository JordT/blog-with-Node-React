import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  //function that will hopefully call one of the server apis
  const callAPI = () => {
    fetch('http://localhost:3001/api').then(res => console.log(res.text()))
  }
  
  return (
    <div className="App">
      <Toolbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* button to test API call */}
        <button onClick={callAPI}>Test Express API</button>
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
