import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from '../../ui/layouts/MainLayout';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={MainLayout} />
        </Switch>
    );
};
