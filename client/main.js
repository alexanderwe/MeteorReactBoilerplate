import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { App } from '../imports/startup/client/routes';

Meteor.startup(() => {
    render(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <title>My Meteor React app</title>
            </Helmet>
            <Router>
                <App />
            </Router>
        </div>,
        document.getElementById('react-root')
    );
});
