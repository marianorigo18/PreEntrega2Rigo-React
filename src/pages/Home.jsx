import React from 'react'
import { ItemListContainer } from '../components'
import dates from "../data/data.json"

export const Home = () => {
  return (
    <div>
      <ItemListContainer>
      {dates.categorias.map((product) => (
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
          ))}
      </ItemListContainer>
    </div>
  )
}
