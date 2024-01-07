import React from 'react'
import ProductList from './ProductList'

const Products = () => {
    let products=[
        {id:101,name:'product1',image:'a.jpg',price:20000,qty:20},
        {id:102,name:'product2',image:'b.jpg',price:10000,qty:10},
        {id:103,name:'product3',image:'c.jpeg',price:30000,qty:20},
        {id:104,name:'product4',image:'d.jpg',price:20000,qty:50},
        {id:105,name:'product5',image:'a.jpg',price:10000,qty:20},
        {id:106,name:'product6',image:'b.jpg',price:25000,qty:60} ]
  return (
    <>
        <ProductList products={products}/>
    </>
  )
}

export default Products
