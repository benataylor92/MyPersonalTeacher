import React from 'react';
import '../Scss/_SignUp.css';

export default function SignUp() {
    return (
        <div className="Sign-up-box">
            <div className="Register">Register</div>
            <form className="Login-form">
                <div className="Form-group">
                    <label htmlfor="First-name">First Name</label>
                    <input type="text" className="Form-control" name="firstname" value />
                <div>
                    <label htmlfor="Last-name">Last Name</label>
                    <input type="text" className="Form-control" name="lastname" value />
                </div>
                <div>
                    <label htmlfor="Email-adress">Email Adress</label>
                    <input type="text" className="Form-control" name="emailaddress" value />
                </div>
                <div>
                    <label htmlfor="Confirm-email-adress">Confirm Email Adress</label>
                    <input type="text" className="Form-control" name="confirmemailaddress" value />
                </div>
                </div>
            </form>
        </div>
    ); 
}