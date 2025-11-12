import React from 'react'
import './New.css'
import { Link } from 'react-router-dom'
const NewArraval = () => {
  return (
    <>
     <div className="containers">
        <h1>New Product Arrival</h1>
        
        <div className="products">
            <h2>trending collections</h2>
            <p>Description of the product goes here. You can provide details about its features, benefits, etc.</p>
            <Link to={"/products"} className='know-btn'>Know more</Link>
        </div>
        </div>
    </>
   
  )
}

export default NewArraval