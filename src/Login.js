import React from 'react';
import './Login.css';

function Login(props) {
    return (
        <div className="LoginContent">

            <form className="FormFields">
                <div className="FormField">
                    <label className="LoginLabel">User name</label>
                    <input className="LoginInput" type="text" />
                </div>
                <div className="FormField">
                    <label className="LoginLabel">Password</label>
                    <input className="LoginInput" type="password" />
                </div>

                <button className="LoginButton">Log in</button>


            </form>

        </div>
    )
}

export default Login;