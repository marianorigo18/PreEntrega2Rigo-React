import React from 'react'
import { ItemListContainer } from '../components'
import data from "../data/data.json"

export const Home = () => {
  console.log(data)
  return (
    <div>
      <ItemListContainer>
        <h1>categorias en ruta /</h1>
      </ItemListContainer>
    </div>
  )
}
