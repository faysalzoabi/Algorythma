import React from 'react';
import './DropDownGates.css';

export default function DropDownGates() {
    return (
        <div className="dropdownContainer">
            <label className="dropdown">
                <div className="dd-button">
                تبويب 
                </div>
                <input type="checkbox" className="dd-input" id="test"/>
                <ul className="dd-menu">
                    <li>تبويب ١</li>
                    <li>تبويب ٢</li>
                    <li>تبويب ٢</li>
                </ul>
            </label>
        </div>
    )
}
