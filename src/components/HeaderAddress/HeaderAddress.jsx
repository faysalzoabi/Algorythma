import React from 'react'
import Search from '../Search/Search';
import './HeaderAddress.css'

export default function HeaderAddress() {
    return (
        <div className="addressContainer">
            <div className="addressSearchBar">
                <Search/>
            </div>
            <div className="address">
                <h2>العنوان</h2>       
            </div>
        </div>
    )
}
