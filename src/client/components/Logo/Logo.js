import React from 'react';
import logo from '../../logo.svg';
import './Logo.css';

const Logo = (props) => {
    // - on click needs to call a function here, that manipulates local state?

    console.log(props.speed)
    return <img src={logo} 
        className={props.speed}
        alt="logo" />;
}

export default Logo;
