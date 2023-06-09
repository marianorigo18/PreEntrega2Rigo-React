import React from 'react'
import { Link } from "react-router-dom";
import { CartWidget } from './CartWidget';


export const Navbar = () => {
  return (
    <div className="w-full bg-gray-700 fixed top-0">
    <div className="container sm bg-slate-300 mx-auto py-1 flex justify-between">
      <h1 className="text-orange-600 text-4xl font-bold">Luc</h1>
      <input type="text" className="w-50 sm:w-96 px-2" placeholder="busca productos..."></input>
      <ul className="hidden w-48 bg-slate-600 font-bold justify-between text-yellow-200 sm:flex">
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/aboutus"}>about us</Link></li>
      <li><Link to={"/contact"}>contact</Link></li>
      </ul>
      <CartWidget></CartWidget>
    </div>
    </div>
  )
}
