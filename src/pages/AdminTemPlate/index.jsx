import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class AdminTemPlate extends Component {
    render() {
        return (
            <div>
                <nav>Navbar</nav>
                <Outlet />
            </div>
        )
    }
}
