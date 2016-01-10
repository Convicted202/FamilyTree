import React from 'react';
import { render } from 'react-dom';

import { Surface } from './surface.jsx';
import { Sidebar } from './sidebar.jsx';

class BuilderView extends React.Component {
    render () {
        return (
            <div className="row" id="builder-view">
                <Surface />
                <Sidebar />
            </div>
        );
    }
}

export { BuilderView };
