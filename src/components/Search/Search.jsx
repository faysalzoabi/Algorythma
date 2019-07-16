import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

export class Search extends Component {

    state = {
        searchCity:''
        }
    
    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
        
    }
    
    render() {
    return (
        <div className="searchCityContainer">
            <div className="searchCityContents">
                <input type="text" name="searchRestaurant" onChange={this.handleChange} className="searchCityInput" placeholder="Search your area ..."/>
            </div>
            <div className="searchIconContents">
                <span className="searchIcon">
                    <FaSearch/>
                </span>
            </div>
        </div>
    )
    }
    }
    
    export default Search

    
    
