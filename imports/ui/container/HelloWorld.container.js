import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import HelloWorld from "../components/HelloWorld.component.jsx";

//Use this to create reactive React Containers with Meteor
export default HelloWorldContainer = createContainer(() => {
    const user = Meteor.user();
    return {
        user
    };
}, HelloWorld);