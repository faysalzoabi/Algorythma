import React from 'react'
import './DateInput.css'
export default function DateInput() {
    return (
        <div className="dateInputContainer">
            <label> 
                <input className="inputdate" id="date" type="date" defaultValue="1980-08-26" />
            </label>
        </div>
    )
}
