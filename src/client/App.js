// import logo from "./logo.svg";
import React from 'react';
import "./App.css";
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
            <BlogPage activePage={'blog'}/>
        </Route>
        <Route path="/submitblog">
          <SubmitBlog activePage={'submit'}/>
        </Route>
        <Route path="/">
          <HomePage speed={logoSpeed} logoSpeedUp={() => incLogoSpeed()} activePage={'home'}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
