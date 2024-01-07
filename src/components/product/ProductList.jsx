import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <>
        {products.length===0 && <h1>No Product Found</h1>}
        <div className='row'>
            {products.map((product,index)=>
                <ProductItem key={product.id} product={product}/>
            )}
        </div>
    </>
  )
}

export default ProductList
