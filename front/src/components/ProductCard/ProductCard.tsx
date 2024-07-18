import React from 'react'
import { ProductCardProps } from './type.productCard'

export const ProductCard: React.FC<ProductCardProps> = ({imageUrl, productName, price}) => {
  return (
    <div>
        <img src={imageUrl} alt={productName}/>
        <strong>{productName}</strong>
        <span>{`US$ ${price}`}</span>
    </div>
  )
}
