import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from '../components'
import { Home, Iluminacion, Industria, AboutUs, Contact, Products, Conductores, PuntoYTomas } from '../pages'
import { BubbleCategories } from '../components' 

export const MainRoutes = () => {
  return (
    <Router>
        <Navbar></Navbar>
        <BubbleCategories></BubbleCategories>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/industria" element={<Industria/>}></Route>
            <Route exact path="/iluminacion" element={<Iluminacion/>}></Route>
            <Route exact path="/conductores" element={<Conductores/>}></Route>
            <Route exact path="/conjuntos" element={<PuntoYTomas/>}></Route>
            <Route exact path="/products/:productId" element={<Products/>}></Route>
        </Routes>
    </Router>
    )
}
