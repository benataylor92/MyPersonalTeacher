import React, { useReducer } from 'react';
import '../Scss/_SignUp.css';
import { render } from '@testing-library/react';

export default class SignUp extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        user: {
            firstname: '',
            lastname: '',
            emailaddress: '',
            confirmemailaddress: '',
            password: '',
            confirmpassword: ''
        },
        // submitted: false;
    };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    render() {

    const { user } = this.state;

    return (
        <div className="Sign-up-box">
            <div className="Register">Register</div>
            <form className="Register-form">
                <div className="Form-group">
                    <label htmlfor="First-name">First Name</label>
                    <input type="text" className="Form-control" name="firstname" value={user.firstname} onChange={this.handleChange}/>
                <div>
                    <label htmlfor="Last-name">Last Name</label>
                    <input type="text" className="Form-control" name="lastname" value={user.lastname} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlfor="Email-adress">Email Adress</label>
                    <input type="text" className="Form-control" name="emailaddress" value={user.emailaddress} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlfor="Confirm-email-adress">Confirm Email Adress</label>
                    <input type="text" className="Form-control" name="confirmemailaddress" value={user.confirmemailaddress} onChange={this.handleChange}/>
                </div>
                <div>
                    <label html="Password">Password</label>
                    <input type="text" className="Form-control" name="password" value={user.password} onChange={this.handleChange}/>
                </div>
                <div>
                    <label html="Confirm-password">Confirm Password</label>
                    <input type="text" className="Form-control" name="confirmpassword" value={user.confirmpassword} onChange={this.handleChange}/>
                </div>
                <div>
                    <button className="Form-button">Register</button>
                    <a className="Cancel-button" href="/loginPage">Cancel</a>
                </div>
                </div>
            </form>
        </div>
    ); 
    };
}