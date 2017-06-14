import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.js";


Meteor.startup(() => {
    render(
        <Router>
            <App></App>
        </Router>,
        document.getElementById("react-root")
    )
});

const App = () => {
    return (
        <Switch>
            <Route path="/" component={MainLayout} />
        </Switch>
    )
}