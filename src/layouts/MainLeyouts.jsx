import React from 'react'
import { MainRoutes } from '../routes/MainRoutes'

export const MainLeyouts = ({children}) => {
  return (
    <div className='main-layout pt-14'>
      <MainRoutes/>
        {children}
    </div>
  )
}
