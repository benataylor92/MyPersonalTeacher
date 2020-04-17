import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header';

import MenPage from '../Pages/MenPage'
import HomePage from '../Pages/HomePage'
import WomenPage from '../Pages/WomenPage'
import SignUp from '../Pages/SignUp'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/menPage" exact component={MenPage} />
            <Route path="/womenPage" exact component={WomenPage} />
            <Route path="/signUp" exact component={SignUp} />

            <Route component={HomePage} />
        </Switch>
    );     
}