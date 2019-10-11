import React, { Component } from 'react'
import '../../static/scss/search.scss';
import { FaSearch } from 'react-icons/fa';

export default class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <input className="search-box" type="text" placeholder="  search" />
                <div className="search-icon-content">
                    <FaSearch className="search-icon" />
                </div>
            </div>
        )
    }
}
