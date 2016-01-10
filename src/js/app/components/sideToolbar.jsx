import React from 'react';
import { render } from 'react-dom';

class SideToolbar extends React.Component {
    render () {
        return (
            <div className="row btn-toolbar">
                <div className="buttons">
                    <div className="medium default btn icon-left icon-right-open-big entypo close-button">
                        <a href="javascript:void(0)">Close</a>
                    </div>
                    <div className="toggle-edit">
                        <div className="medium default btn icon-right icon-pencil entypo edit-button">
                            <a href="javascript:void(0)">Edit</a>
                        </div>
                        <div className="medium default btn icon-right icon-eye entypo view-button hidden">
                            <a href="javascript:void(0)">View</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SideToolbar };
