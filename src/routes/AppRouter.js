import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import { AuthContext } from '../context/authContext'
import { AuthReducer } from '../reducers/AuthReducer'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'

const AppRouter = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }

    const [user, dispatch] = useReducer(AuthReducer, {}, init)

    useEffect(() => {
        if (!user) return
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>} />
                    <Route path="/*" element={
                        <PrivateRouter>
                            <RoutesApp />
                        </PrivateRouter>} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default AppRouter
