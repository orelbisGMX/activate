import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../static/scss/navigation.scss'
export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link className="links" to="/About">Services  </Link>
                <Link className="links" to="/About">Labs  </Link>
                <Link className="links" to="/Blog">Blog  </Link>
                <Link className="links" to="/About">About  </Link>
                <Link className="links" to="/About">Contact</Link>
            </div>
        )
    }
}
