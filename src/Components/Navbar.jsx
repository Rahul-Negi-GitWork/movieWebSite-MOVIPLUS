import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <span className="nav-logo-text">
          Movi<span className="logo-accent">Plus</span>
        </span>
        <div className="logo-sprockets"></div>
      </div>
      <div className="navbar-links">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/favorites" className='nav-link'>Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar