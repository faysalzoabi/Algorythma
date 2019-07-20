import React from 'react'
import './InputBox.css';

export default function InputBox() {
    return (
    <div className="inputboxWrapper">
        <form>
            <label className="inputLabel">
                <span className="labelTitle">العنوان</span> 
                <input className="inputField" type="text" name="name" placeholder="عنوان ما"/>
            </label>
        </form>  
    </div>
    )
}
