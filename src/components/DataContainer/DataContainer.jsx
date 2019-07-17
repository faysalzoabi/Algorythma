import React, { Component } from 'react'
import DataElements from '../DataElements/DataElements';
import './DataContainer.css';

export class DataContainer extends Component {

    state = {
        data:[
                {
                    id: 1,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
                {
                    id: 2,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
                {
                    id: 3,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
                {
                    id: 4,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
                {
                    id: 5,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
                {
                    id: 6,
                    info: "عنوان أكثر من 8 كلمات في وصف القضية"
                },
            ]
    }

    render() {
        const {data} = this.state;
        return (
            <div className="dataAddressContainer">
                {
                data.map((item) => {
                    return <DataElements element={item} key={item.id}/> 
                })
                }
            </div>
        )
    }
}

export default DataContainer
