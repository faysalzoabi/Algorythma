import React from 'react'
import InputBox from '../InputBox/InputBox';
import './Header.css';
import HeaderAddress from '../HeaderAddress/HeaderAddress';
import DataInput from '../DateInput/DateInput';
import DropDown from '../DropDown/DropDown';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="titleWrapper">
                <HeaderAddress/>
            </div>
            <div className="inputsWrapper">
                <div className="btn-group">
                    <button className="x-btn btn">X</button>
                    <button className="save-btn btn">حفظ</button>
                </div>
                <div className="input-group"> 
                    <div className="selectorContainer">
                        <span>تنتهي في</span>
                        <DataInput />
                    </div>
                    <div className="selectorContainer">
                        <span>يبدأ في</span>
                        <DataInput/>
                    </div>
                    <div className="selectorContainer">
                        <span>كلمة</span>
                        <DropDown/>
                    </div>
                    <div className="inputContainer">
                        <InputBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
