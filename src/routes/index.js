import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header';

import HomePage from '../Pages/HomePage'
import KS1 from '../Pages/KS1'
import KS2 from '../Pages/KS2'
import KS3 from '../Pages/KS3'
import KS4 from '../Pages/KS4'
import KS5 from '../Pages/KS5'
import SignUp from '../Pages/SignUp'
import LoginPage from '../Pages/LoginPage';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/KS1" exact component={KS1} />
            <Route path="/KS2" exact component={KS2} />
            <Route path="/KS3" exact component={KS3} />
            <Route path="/KS4" exact component={KS4} />
            <Route path="/KS5" exact component={KS5} />
            <Route path="/loginPage" exact component={LoginPage} />
            <Route path="/signUp" exact component={SignUp} />

            <Route component={HomePage} />
        </Switch>
    );     
}