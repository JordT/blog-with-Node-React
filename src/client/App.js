// import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Logo from './components/Logo/Logo.js'
import Toolbar from "./components/Toolbar/Toolbar";
import DBPostForm from "./components/DBPostForm/DBPostForm";
import DBGetForm from "./components/DBGetForm/DBGetForm";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import SubmitBlog from './pages/submit-blog-page/SubmitBlog';
import BlogPage from '../client/pages/blog-page/BlogPage';

function App() {

  const [logoSpeed, setLogoSpeed] = React.useState("App-logo");

  const incLogoSpeed = () => {
    setLogoSpeed("App-logo1");
    setTimeout(() => {
        setLogoSpeed("App-logo")
    }, 1000);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
            <BlogPage />
        </Route>
        <Route path="/submitblog" component={SubmitBlog}/>
        <Route path="/">
          <HomePage speed={logoSpeed} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

      /* 
      commented out to test new routes.
      <div className="App">
        <Toolbar />
        <DBPostForm logoSpeedUp={() => incLogoSpeed()}/>
        <DBGetForm logoSpeedUp={() => incLogoSpeed()}/>
        <header className="App-header">
          <Logo speed={logoSpeed}/>
        </header>
      </div> */