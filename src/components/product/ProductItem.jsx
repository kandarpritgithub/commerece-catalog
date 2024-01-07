import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductItem = ({product}) => {
    let {id,name,image,price,qty}=product
    const redirect=useNavigate()
    let addtoCart=()=>{
      //stmt
      redirect('/cart')
    }
  return (
    <div class="card col-3 m-2" >
    <img src={require(`../../assests/images/${image}`)} class="card-img-top" alt={name} height='200px'/>
    <div class="card-body">
        <h3 className='card-title'>{name}</h3>
        <p class="card-text">${price}</p>
        <p class="card-text">{qty}</p>
        <button type="button" class="btn btn-primary me-2" onClick={addtoCart}>Add to cart</button>
        <Link type="button" class="btn btn-info" to={`/products/details/${id}`}>View</Link>
        <Link type="button" class="btn btn-info" to={`/products/details/${JSON.stringify(product)}`}>View</Link>
    </div>
  </div>
  )
}

export default ProductItem
