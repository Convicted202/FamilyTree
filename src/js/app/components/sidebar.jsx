import React from 'react';
import { render } from 'react-dom';

import { SideToolbar } from './sideToolbar.jsx';
import { SidebarList } from './sidebarList.jsx';

class Sidebar extends React.Component {
    render () {
        return (
            <div className="four columns" id="right-sidebar">
                <SideToolbar />
                <SidebarList />
            </div>
        );
    }
}

export { Sidebar };
