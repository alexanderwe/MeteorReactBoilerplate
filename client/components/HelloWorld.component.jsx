import React, { Component } from "react";
import { NavLink } from "react-router-dom"


class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>My Meteor React App</h1>
                <p>Happy Coding!</p>
                <p>
                    If you see some issues with this boilerplate make an issue on
                    <a href="https://github.com/alexanderwe/MeteorReactBoilerplate"> Github</a>
                </p>

                <div>
                    <h3>Test the routing</h3>
                    <NavLink to={"/"}>Hello World</NavLink> <br />
                    <NavLink to={"/goodbye"}>Goodbye World</NavLink>
                </div>

            </div>
        );
    }
}

export default HelloWorld;