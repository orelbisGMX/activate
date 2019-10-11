import React, { Component } from 'react'
import '../../static/scss/header.scss'
import Search from './Search'
import Navigation from './Navigation'
import Profile from './Profile'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Search />
                <Navigation className="navigation" />
                <Profile className="profile" />
            </header>
        )
    }
}
