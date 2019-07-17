import React from 'react'
import './SingleNumber.css';


export default function SingleNumber(props) {
    return (
        <span  id={props.item}  className='numberUnit'>
            {props.item}
        </span>
    )
}
