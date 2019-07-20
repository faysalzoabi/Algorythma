import React from 'react'
import DateInput from '../DateInput/DateInput';
import DropDown from '../DropDown/DropDown';
import './DataElements.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function DataElements(props) {
    return (
        <div className="dataAddressContents">
            <div className="dataAddressTitle">
                <p>{props.element.info}</p>
            </div>
            <div className="inputAddressGrouping">
                <div className="inputAddressElements"><DateInput/></div>
                <div className="inputAddressElements"><DropDown/></div>
                <div className="inputAddressElements details"><small>تفاصيل</small></div>
                <div className="inputAddressElements"><ToggleSwitch/></div>
            </div>
        </div>
    )
}
