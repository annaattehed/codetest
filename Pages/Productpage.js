import { useParams } from 'react-router-dom';
import '../css/App.css'

// Time: 1h

function Productpage() {
    
  // using params to render data via id 

    const params = useParams()
    console.log(params)
    const id = params.id 
    const product = require(`../data/${id}.json`)

    
    // returning data from json.file 
    

  return (

    <div className='productpage-container'>

  
       
       <h1 className='productpage-h1'> {product.name}</h1>
       <h3 className='productpage-description'> {product.description}</h3>
       <h3 className='product-price'> {product.price + ' ' + product.currency}</h3>
       <img className='singlepage-img' src={product.image}
       alt=" " width={400}
       padding={25}></img>
       
       <button className='addtocart-button' onClick={() => 
        alert('Good catch, shoes successfully added to shopping cart! :-) ')}>Add to cart </button>
       
    </div>

    // added button to alert that item is "added to cart"

  )

}

export default Productpage