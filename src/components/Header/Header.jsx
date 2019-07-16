import React from 'react'
import InputBox from '../InputBox/InputBox';
import './Header.css';
import HeaderAddress from '../HeaderAddress/HeaderAddress';
import DatePicking from '../DatePicking/DatePicking';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="titleWrapper">
                <HeaderAddress/>
            </div>
            <div className="inputsWrapper">
                <div className="btn-group">
                    <button className="x-btn">X</button>
                    <button className="save-btn">حفظ</button>
                </div>
                <div className="input-group"> 
                    <DatePicking /> 
                    <DatePicking /> 
                    <DatePicking /> 
                    <InputBox />
                </div>
            </div>
        </div>
    )
}
