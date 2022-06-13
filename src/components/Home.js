import React, { useState } from 'react'
import ProductData from '../ProductData';
import SingleProduct from './SingleProduct';
import './home.css';
const Home = ({cart,setCart}) => {

  const [products]=useState(ProductData)

  // console.log(cart);
  return (
    <>
     <div className='productContainer'>
       {products.map((prod)=>
        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        )}
        
     </div> 
    </>
  )
}

export default Home
