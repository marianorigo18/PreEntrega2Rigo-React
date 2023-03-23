import React from 'react'
import { BubbleAlert } from './BubbleAlert'

export const CartWidget = () => {
  return (
    <div>
    <span className='relative left-2 top-3'>
        <BubbleAlert></BubbleAlert>
    </span>
    <button className='bg-green-700 py-1 px-2 rounded text-neutral-50 text-xl'>
        carro
    </button>
    </div>
  )
}
