import React from 'react'
import './GatesList.css';
import DropDownGates from '../DropDownGates/DropDownGates';
export default function GatesList() {
    return (
        <div className="gatesContainer">
            <div className="gatesdata">
                <span className="tab gate1 active">تبويب ١</span>
                <span className="tab gate2">تبويب ٢</span>
                <span className="tab gate3">تبويب ٢</span>
                <span className="tab gate4">تبويب ٤ </span>
                <span className="tab gate5">تبويب ٥</span>
            </div>
            <DropDownGates/>
        </div>
    )
}
