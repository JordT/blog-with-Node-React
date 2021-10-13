import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import axios from 'axios';

function App() {
  //function that will hopefully call one of the server apis
  const user = {
    "name": "Jordan",
    "city": "Edinburgh",
  }

  const dbPost = () => {
    axios
      .post('http://localhost:3001/blogger', user)
      .then(() => console.log('User Created'))
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
        <button onClick={dbPost}>DB Post</button>
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
