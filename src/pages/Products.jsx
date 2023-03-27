import React from 'react'
import { useParams } from 'react-router-dom'

export const Products = () => {
    const {productId} = useParams();
    console.log(productId);
  return (
    <div>Products Id</div>
  )
}
