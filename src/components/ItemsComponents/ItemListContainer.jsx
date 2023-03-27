import React from 'react'

export const ItemListContainer = ({children}) => {
  return (
    <div className='item-list-container grid grid-cols-6 gap-3'>{children}</div>
  )
}
