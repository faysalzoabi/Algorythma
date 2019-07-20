import React from 'react'
import './DataSection.css';
import GatesList from '../GatesList/GatesList';
import NumbersList from '../NumbersList/NumbersList';
import DataContainer from '../DataContainer/DataContainer';

export default function DataSection() {
    return (
        <section className= "dataContainer">
            <GatesList/>
            <div className="dataContents">
                <NumbersList/>
                <div className="datadetails">
                        <DataContainer/>
                </div>
            </div>
        </section>
    )
}
