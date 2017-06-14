import React, { Component } from "react";
import { NavLink } from "react-router-dom"


class GoodbyeWorld extends Component {
    render() {
        return (
            <div>
                <h1>Goodbye</h1>
                <div>
                    <h3>Test the routing</h3>
                    <NavLink to={"/"}>Hello World</NavLink> <br />
                    <NavLink to={"/goodbye"}>Goodbye World</NavLink>
                </div>
            </div>
        );
    }
}

export default GoodbyeWorld;