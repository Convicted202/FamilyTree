import React from 'react';
import { render } from 'react-dom';

import { Navigation } from './navigation.jsx';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            url: 'playground'
        };
    }

    render () {
        return (
            <div className="row" id="app-container">
                <div className="columns" id="left-sidebar">
                    <Navigation />
                </div>
                <div className="columns" id="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { App };
