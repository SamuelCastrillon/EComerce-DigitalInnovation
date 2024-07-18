import { arrrayProducts } from '@/helpers/dataProducts'
import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'

const ProductsList = () => {

const Products = arrrayProducts

  return (
    <div>
        {
            Products.map((e)=>{
                return <ProductCard key={e.id} imageUrl={e.image} productName={e.name} price={e.price}/>
            })
        }
    </div>
  )
}

export default ProductsList

