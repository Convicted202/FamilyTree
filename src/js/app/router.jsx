import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import { App } from './components/app.jsx';
import { BuilderView } from './components/builderView.jsx';

render((
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ BuilderView } />
            <Route name="playground" path="playground" component={ BuilderView } />
            <Route name="preferences" path="preferences" component={ BuilderView } />
            <Redirect from="*" to="playground" />
        </Route>
    </Router>
), document.getElementById('app-wrapper'));
