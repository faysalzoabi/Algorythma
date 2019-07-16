import React from 'react'
import './DropDown.css';

export default function DropDown() {
    return (
        <label class="dropdown">
            <span>كلمة</span>
            <div>
            <div class="dd-button">
            القائمة المنسدلة
            </div>
            <input type="checkbox" class="dd-input" id="test"/>
            <ul class="dd-menu">
                <li>البند الأول</li>
                <li>البند الثاني</li>
                <li>البند الثالث</li>
            </ul>
            </div>
            
        </label>
    )
}
