import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Counter from '../components/Counter'
import Home from '../components/Home'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
