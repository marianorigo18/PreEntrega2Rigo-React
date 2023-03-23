import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from '../components'
import { Home, Otro } from '../pages'

export const MainRoutes = () => {
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/otro" element={<Otro/>}></Route>
        </Routes>
    </Router>
    )
}
