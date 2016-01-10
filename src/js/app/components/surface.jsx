import React from 'react';
import { render } from 'react-dom';

class Surface extends React.Component {
    render () {
        return (
            <div className="eight columns" id="content">
                <div className="content-toolbar">
                    <ul className="toolbar-menu">
                        <li className="toolbar-item">
                            <a href="javascript:void(0)"><i className="icon-plus"></i></a>
                        </li>
                        <li className="toolbar-item">
                            <a href="javascript:void(0)"><i className="icon-download"></i></a>
                        </li>
                        <li className="toolbar-item">
                            <a href="javascript:void(0)"><i className="icon-export"></i></a>
                        </li>
                        <li className="toolbar-item">
                            <a href="javascript:void(0)"><i className="icon-bag"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="sample-element">
                    <div className="photography-wrapper">
                        <div className="photography"><i className="icon-user"></i></div>
                    </div>
                    <div className="brief-info">
                        <p className="full-name">John Doe</p>
                        <p className="dates">1900-2000</p>
                    </div>
                </div>
            </div>
        );
    }
}

export { Surface };
