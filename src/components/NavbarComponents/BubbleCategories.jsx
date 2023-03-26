import React from 'react'
import { Link } from 'react-router-dom'

export const BubbleCategories = () => {
  return (
    <>
    <ul className="hidden w-44 bg-slate-600 font-bold justify-between text-yellow-200 sm:flex">
        <li><Link to={"/industria"}>industria</Link></li>
        <li><Link to={"/iluminacion"}>iluminacion</Link></li>
    </ul>
    </>
  )
}
