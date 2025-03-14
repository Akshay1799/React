import React from 'react'

function Product({productName, price}) {
  return (
    <div>
        Product: {productName} and 
        Price: {price}
    </div>
  )
}

export default Product