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
            <BlogPage />
        </Route>
        <Route path="/submitblog" component={SubmitBlog}/>
        <Route path="/">
          <HomePage speed={logoSpeed} logoSpeedUp={() => incLogoSpeed()}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
