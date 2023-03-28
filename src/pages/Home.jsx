import React from 'react'
import { Link } from 'react-router-dom'
import { ItemListContainer } from '../components'
import dates from "../data/data.json"

export const Home = () => {
  return (
    <div>
      <ItemListContainer>
      {dates.categorias.map((product) => (
        <Link to={product.title}>
            <div className="product__card">
              <img className="product__img" src={product.img} alt={product.title}/>
                <p className="product__title">{product.title}</p>
            </div>
        </Link>  
          ))}
      </ItemListContainer>
    </div>
  )
}
