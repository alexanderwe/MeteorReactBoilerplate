import React from "react";

import {
    Route,
    Switch
} from "react-router-dom";

import HelloWordContainer from "../container/HelloWorld.container.js";
import GoodbyeWorld from "../components/GoodbyeWorld.component.jsx";


export const MainLayout = () => (
    <div className="main-layout">
        <main>
            <Switch>
                <Route exact path="/" component={HelloWordContainer} />
                <Route path="/goodbye" component={GoodbyeWorld} />
            </Switch>
        </main>
    </div>
);

export default MainLayout;