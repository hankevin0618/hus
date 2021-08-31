import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from '../views/Auth';
import Home from '../views/Home';
import Header from './Header';
import InnerPost from './Posts/InnerPost';

const AppRouter = ({ isLoggedIn, userObj }) => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header isLoggedIn={isLoggedIn} />
                    <Home isLoggedIn={isLoggedIn} />
                </Route>
                <Route exact path="/login">
                    <Auth isLoggedIn={isLoggedIn} />
                    {isLoggedIn && <Redirect to="/" />}
                </Route>
                <Route path="/post/:id">
                    <Header isLoggedIn={isLoggedIn} />
                    <InnerPost />
                </Route>
            </Switch>
        </Router>
    )
}


export default AppRouter