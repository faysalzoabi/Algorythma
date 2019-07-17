import React from 'react'
import DateInput from '../DateInput/DateInput';
import './DataElements.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function DataElements(props) {
    return (
        <div className="dataAddressContents">
            <div className="dataAddressTitle">
                {props.element.info}
            </div>
            <div className="inputAddressGrouping">
                <div className="inputAddressElements"><DateInput/></div>
                <div className="inputAddressElements"><DateInput/></div>
                <div className="inputAddressElements details">تفاصيل</div>
                <div className="inputAddressElements"><ToggleSwitch/></div>
            </div>
        </div>
    )
}
