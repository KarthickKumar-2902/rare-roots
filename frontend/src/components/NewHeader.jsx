// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/NewHeader.css';
import BrandImage from '../assets/brandimg.png';

function NewHeader() {
  const present = localStorage.getItem('userdata');
  const navigate = useNavigate();

  const removeauth = (e) => {
    e.preventDefault();
    localStorage.removeItem('userdata');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className='newheader'>
      <Link to="/">
        <img src={BrandImage} className='himage' alt='Brand' />
      </Link>
      {present ? (
        <nav className='nav'>
          <Link className='nav-link' to='/explore'>Explore</Link>
          <Link className='nav-link' to='/myproducts'>My Products</Link>
          <Link className='nav-link' to='/about'>About Us</Link>
          <Link className='nav-link' to='/login' onClick={removeauth}>Logout</Link>
        </nav>
      ) : (
        <nav className='newnav'>
          <Link to='/register' className='nn'>Register</Link>
          <Link to='/login' className='nn'>Login</Link>
        </nav>
      )}
    </div>
  );
}

export default NewHeader;
