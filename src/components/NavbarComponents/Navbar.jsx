import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='text-3xl font-bold underline'>Navbar</h1>
      <li><Link exact to={"/home"}>home</Link></li>
      <li><Link exact to={"/aboutus"}>about us</Link></li>
      <li><Link exact to={"/contact"}>contacto</Link></li>
      <li><Link exact to={"/industria"}>industria</Link></li>
      <li><Link exact to={"/iluminacion"}>iluminacion</Link></li>
    </div>
  )
}
