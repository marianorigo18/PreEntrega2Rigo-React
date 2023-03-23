import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Navbar</h1>
      <li><Link exact to={"/"}>comun</Link></li>
      <li><Link exact to={"/home"}>home</Link></li>
      <li><Link exact to={"/otro"}>otro</Link></li>
    </div>
  )
}
