import React from 'react'
import { Link } from 'react-router-dom'
import './styles/nav.css'

import logo from '../shoe-store.png'


const Navbar = () => {

  const styles={
    color:'black',
    textDecoration: "None"
  }
  return (
    <div className='div-nav'>
      <div className='div-left'>
      <Link to = '/'><img className='div-main-logo' src={logo} alt='shoe-logo' /></Link>
      <h1>Welcome to our shoe store</h1>
      </div>  

      <button className='nav-button'>
        <Link to='/contact' style={styles}>Contact Us</Link>
      </button>
      </div>
  )
}

export default Navbar