import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../views/Home';

const AppRouter = () => {

    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
        </Router>
    )
}


export default AppRouter