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
                <div className="item-1">
                    <button className="x-btn btn">&times;</button>
                    <button className="save-btn btn">حفظ</button>
                </div>
                <div className="grid-item item-3">
                    <span className="inputlabel">تنتهي في</span>
                    <DataInput />
                </div>
                <div className="grid-item item-4">
                    <span className="inputlabel">يبدأ في</span>
                    <DataInput/>
                </div>
                <div className="grid-item item-5">
                    <span className="inputlabel">كلمة</span>
                    <DropDown/>
                </div>
                <div className="item-6">
                    <InputBox />
                </div>
            </div>
        </div>
    )
}
