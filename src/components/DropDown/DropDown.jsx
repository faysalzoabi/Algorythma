import React from 'react'
import './DropDown.css';

export default function DropDown() {
    return (
        <label className="dropdown">
            <div className="dd-button">
            <span>القائمة المنسدلة</span>     
            </div>
            <input type="checkbox" className="dd-input" id="test"/>
            <ul className="dd-menu">
                <li>البند الأول</li>
                <li>البند الثاني</li>
                <li>البند الثالث</li>
            </ul>
        </label>
    )
}
