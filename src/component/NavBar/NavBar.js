import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='titles'>
          <Link className='link' to="/">Camera Shop</Link>
        </div>

        <div className='links'>
          <Link className='link' to="/login">Login</Link>
          <Link className='link' to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar; 