import React, { Component } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default class AdminTemPlate extends Component {
    render() {
        if (!localStorage.getItem("UserAdmin")) return <Navigate replace to="/auth" />
        return (
            <div>
                <nav>Navbar Admin</nav>
                <Outlet />
            </div>
        )
    }
}

