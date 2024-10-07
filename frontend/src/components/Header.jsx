// import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
import BrandImage from '../assets/brandimg.png'

function Header() {
  function removeauth() {
    localStorage.removeItem('userdata');
  }

  return (
    <div className='header'>
    <Link to="/">
    <img src={BrandImage} className='himage'></img></Link>
    <nav className='nav'>
    <Link className='nav-link' to='/explore'>Explore</Link>
    <Link className='nav-link' to='/myproducts'>My Products</Link>
    <Link className='nav-link' to='/about'>About Us</Link>
    <Link className='nav-link' to='/login' onClick={removeauth}>Logout</Link>
  </nav>
      

  </div>
  )
}

export default Header
