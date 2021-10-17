import React from 'react';
import logo from '../../logo.svg';
import './Logo.css';

const Logo = (props) => {
    
    return <img src={logo} 
        className={props.speed}
        alt="logo" />;
}

export default Logo;
