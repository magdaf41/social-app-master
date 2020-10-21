import React from 'react';
import LoginButton from './LoginButton';
import './PopupContent.css';

function PopupContent (props) {
    return (
        <div className='PopupContent'>
            
            <h2>Join us</h2>
            <div className="Singup"> <a href="http://localhost:3000/signup">Sign up</a> </div>
            <LoginButton text='Login'/>
        </div>
    )
}

export default PopupContent;