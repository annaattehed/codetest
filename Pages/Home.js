import React from 'react'
import '../css/App.css'
import { Link } from 'react-router-dom'

// Time: 30min

function Home() {
  return (
    <div className='homepage-container'>
             <img className='homepage-image'
             src={require('../images/1.jpg')} 
             alt='hejhej' width={650} height={600}/>


            <aside className='homepage-aside'>
            <h1 className='homepage-h1'>I'm glad you found us.</h1>
            <Link to="/products">
                <button className="homepage-button">
                    Browse Products Now
                </button>
             </Link>
             <br />
            </aside>  
    </div>


    


  )
}

export default Home