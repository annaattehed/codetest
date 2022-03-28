import './css/App.css';
import Products from './data/products.json'
import React from 'react'
import { Link } from 'react-router-dom'

// Time: 5h 

function App() {

  // maping through data from products.json

  return (
    <div className='product-page'>
      <div className="product-container" >

        {Products?.map(p => (
          <article key={p.id}>
            <Link to={`/productpage/${p.id}`}>
              <img className='product-img' src={require('.' + p.thumbnail)}
                alt='Products'
                width={280}
                padding={25}></img>
            </Link>
            <br />
            <p className='product-name'> {p.name} </p>
            <p className='price-container'> {p.price + p.currency} </p>
          </article>


        ))}

      </div>

    </div>



  )
}

export default App;
