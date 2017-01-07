import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import HelloWorld from './components/HelloWorld.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {content: (<HelloWorld />)})
    }
});
