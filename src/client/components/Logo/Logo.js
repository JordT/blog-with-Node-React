import React from 'react';
import logo from '../../logo.svg';
import './Logo.css';

const Logo = () => {
    // - on click needs to call a function here, that manipulates local state?
    const [logoSpeed, setLogoSpeed] = React.useState("App-logo");

    // const setClass = () => {
    //     return "App-logo1"
    // }
    console.log(logoSpeed)
    return <img src={logo} 
        className={logoSpeed.toString()}
        alt="logo" />;
}

export default Logo;
