import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

export default class HelloWorld extends TrackerReact(Component) {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My Meteor React App</h1>
                <p>Happy Coding!</p>
                <p>
                    If you see some issues with this boilerplate make an issue on
                    <a href="https://github.com/alexanderwe/MeteorReactBoilerplate"> Github</a>

                </p>

            </div>
        );
    }
}
