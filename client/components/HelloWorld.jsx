import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class HelloWorld extends TrackerReact(Component) {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Woop Woop!</p>
            </div>
        )
    }
}
