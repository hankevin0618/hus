import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from '../views/Auth';
import Home from '../views/Home';

const AppRouter = ({ isLoggedIn, userObj }) => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Auth />
                </Route>
            </Switch>
        </Router>
    )
}


export default AppRouter