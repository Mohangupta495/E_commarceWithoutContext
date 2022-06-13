import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css'; 

const Header = () => {
  return (
    <div className='head'>
            <span>A simple e commarce store in react</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
    </div>
  )
}

export default Header

