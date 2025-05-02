import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>InstaGrab</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  </nav>
);

export default Navbar;
