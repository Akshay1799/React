import React from 'react'

const ProductCard = ({...product}) => {
  return (
    <div style={{backgroundColor:'lightskyblue', width:200, height:200, padding:10, margin:'10px auto', borderRadius:14}}>
        <h3>Model: {product.name}</h3>
        <h5>Price:{product.price}</h5>
        <p style={{padding:10}}>{product.description}</p>
    </div>
  )
}

export default ProductCard