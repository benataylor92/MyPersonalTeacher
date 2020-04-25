import React from 'react';

import '../Scss/_LoginPage.css';


export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="Login-component">   
                <div className="Login">Login</div>
                <form className="Login-form">
                    <div className="Form-group">
                        <label htmlfor="Email-name">Email Adress</label>
                        <input type="text" className="Form-control" name="emailAdress" />
                    <div>
                        <label htmlfor="Password">Password</label>
                        <input type="text" className="Form-control" name="password" />
                    </div>
                    <div>
                    <button className="Form-button">Login</button>
                    <a className="Register-button" href="/Signup">Register</a>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}