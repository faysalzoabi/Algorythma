import React from 'react'
import './SingleNumber.css';


export default function SingleNumber(props) {
    return (
        <span className="numberUnit">
            {props.item}
        </span>
    )
}
