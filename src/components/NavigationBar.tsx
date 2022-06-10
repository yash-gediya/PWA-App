import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Nav>
                    <Link to="/" >Home</Link>
                    <Link to="users">Users</Link>
                    <Link to="about">About</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar