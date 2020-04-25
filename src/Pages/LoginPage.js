import React from 'react';

import '../Scss/_LoginPage.css';


export default class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.setState = {
            user: {
                emailaddress: '',
                password: ''
        },
    };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        
        const  { emailaddress, password } = this.setState;

        return (
            <div className="Login-component">   
                <div className="Login">Login</div>
                <form className="Login-form">
                    <div className="Form-group">
                        <label htmlfor="Email-name">Email Adress</label>
                        <input type="text" className="Form-control" name="emailAdress" value={emailaddress} onChange={this.handleChange}/>
                    <div>
                        <label htmlfor="Password">Password</label>
                        <input type="text" className="Form-control" name="password" value={password} onChange={this.handleChange}/>
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