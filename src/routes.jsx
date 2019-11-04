import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from './Login/LoginContainer.jsx';
import Home from './Home/HomeContainer.jsx';
import Credit from './Credit/CreditContainer.jsx';

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/credit" component={Credit} exact />
        <Redirect to="/login" />
    </Switch>
);

export default Routes;
