import React from 'react';
import './NavBar.css';
import { MdNotifications } from "react-icons/md";


export default function NavBar() {
    return (
        <div className="header">
            <div className="notification-container">
                <MdNotifications />
                <span className="notificationIcon">5</span>
            </div>
            
            <h2 className="logo">Your Logo</h2>
            <input type="checkbox" id="nav-toggle" name="" className="nav-toggle"/>
            <nav>
                <ul>
                    <li>العنوان الاول</li>
                    <li>العنوان الثاني</li>
                    <li>العنوان الثالث</li>
                    <li>العنوان الرابع</li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>
        
    )
}
