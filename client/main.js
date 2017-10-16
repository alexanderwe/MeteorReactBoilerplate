import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '../imports/startup/client/routes';

Meteor.startup(() => {
    render(
        <Router>
            <App />
        </Router>,
        document.getElementById('react-root')
    );
});
