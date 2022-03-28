import React from 'react'
import '../css/App.css'
import { Link } from 'react-router-dom'

// Time: 20min

function Footer() {
  return (
    <div className='Footer'>
      <div>
        <Link to="/">
          <p type="homepage-button">
            Homepage
          </p>
        </Link>
      </div>
      <p>Terms and Condition</p>
      <p>Contact Us</p>




      <div className='Footercopy'> Copyright &copy; 2022</div>
    </div>
  )
}

export default Footer