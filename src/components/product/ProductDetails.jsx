import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    // const params=useParams()
    // console.log(params)
    const {product}=useParams()
    console.log(product)
  return (
    <div>
        <h1>Product Details</h1>
        {product}
    </div>
  )
}

export default ProductDetails
