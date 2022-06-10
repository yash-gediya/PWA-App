import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Users from '../components/Users'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/users"} element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing