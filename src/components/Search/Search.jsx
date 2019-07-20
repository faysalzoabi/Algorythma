import React, { Component } from 'react';
import { MdSearch, MdNotifications} from "react-icons/md";
import './Search.css';

export class Search extends Component {

    state = {
        search:'',
        notification:5
        }
    
    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
        
    }
    
    render() {
        const{notification} = this.state;
    return (
        <div className="searchContainer">
            <div className="bell">
                <span className="bellcontents">
                    <MdNotifications />
                    <span className="notification">{notification}</span>
                </span>
            </div>
            <div className="searchIconContents">
                <span className="searchIcon">
                    <MdSearch className="mdicon"/>
                </span>
            </div>
            <div className="searchContents">
                <input type="text" name="search" onChange={this.handleChange} className="searchInput" placeholder="بحث"/>
            </div>
        </div>
    )
        }
    }
    
    export default Search

    
    
