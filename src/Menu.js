import React from 'react';
import './Home.css';
import {  Link } from "react-router-dom";





function Menu(props) {
    return (

            <nav className="menu">
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/signup'><li>Sign up</li></Link>
                    <li><Link to='/' >Logout</Link></li>

                </ul>
            </nav>



    )
}

export default Menu;