import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import "./home.css";



const Cart = ({cart , setCart}) => {
const [total,setTotal]=useState()

useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc+ Number(curr.price),0))
 })
  return (<>

    <h1 className='text-center'>This is your cart</h1>
    <h2>Price==Rs.{total}</h2>
    <div className='productContainer'>
      {cart.map((prod)=>(
        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
      )
        )}
    </div>
    </>
  )
}

export default Cart
