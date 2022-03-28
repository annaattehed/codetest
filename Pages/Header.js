import React from 'react'
import '../css/App.css'
import Logo from '../static/panagora-logo.svg'
import { Link } from 'react-router-dom'

// Time: 30min

function header() {
  return (
    <nav>
      <div className='logo'>
    <img src={Logo} alt="Logo productpage" />
  </div>

  <div className='link-container'>

    <Link to="/products">Products</Link>
    &nbsp;    &nbsp;    &nbsp;
    <Link to="/About">About</Link>

  </div>
  </nav>
  )
}

export default header