import React from 'react'
import { Navbar } from '../components'

export const MainLeyouts = ({children}) => {
  return (
    <div>
        main Leyout
        <Navbar></Navbar>
        {children}
    </div>
  )
}
