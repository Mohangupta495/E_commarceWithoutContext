import React from "react";
import './singleProd.css';
const SingleProduct = ({prod,setCart,cart}) => {
  return (
    <div className="card">
        <img src={prod.images} alt="BigCo Inc. logo"/>
      <div className="card-body">
        <p className="card-text">
          {prod.title}
        </p>
        <h5>Price :Rs.{prod.price}</h5>
      </div>
      {cart.includes(prod) ? (
          <button className="btn btn-primary" onClick={()=>{
            setCart(cart.filter((e)=>e.id!==prod.id))
            
        }}>Remove from  cart</button>
      ):(
<button className="btn btn-primary" onClick={()=>{
          setCart([...cart,prod])
      }}>Add to cart</button>
      )}
      
    </div>
  );
};

export default SingleProduct;
