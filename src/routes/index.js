import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header';

import OrderPage from '../Pages/OrderPage'
import HomePage from '../Pages/HomePage'
import BoxesPage from '../Pages/BoxesPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import SignUp from '../Pages/SignUp'
import LoginPage from '../Pages/LoginPage';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/orderPage" exact component={OrderPage} />
            <Route path="/boxesPage" exact component={BoxesPage} />
            <Route path="/aboutPage" exact component={AboutPage} />
            <Route path="/contactPage" exact component={ContactPage} />
            <Route path="/loginPage" exact component={LoginPage} />
            <Route path="/signUp" exact component={SignUp} />

            <Route component={HomePage} />
        </Switch>
    );     
}