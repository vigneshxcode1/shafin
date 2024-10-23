import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Dashbroad from '../../../Dashbroad/Dashbroad';
import axios from 'axios';



const Createtestimonial = () => {

  const [name , setname] = useState('');
  const [review , setreview] = useState('');

  const navigate = useNavigate();

const handeleSubmit=async(e)=>{
  e.preventDefault();

  try {
    const result = await axios.post(`http://localhost:8000/api/v1/createtestmonial`,{name,review});
    console.log(result);
    navigate("/home")
  } catch (error) {
    console.error(error)
  }
}



  return (



    <>

<div className="d-flex  justify-content-center align-items-center login">
        <div>

          <form onSubmit={handeleSubmit}>
            <h2 className="grid-title">share your experience</h2>
            <div className="mb-3">
              <label>User Name</label>
              <input
                type="text"
                required
                placeholder="Enter name"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>fell free to write your review</label>
              <input
                type="text"
                required
                placeholder="Enter reviwe"
                className="form-control"
                value={review}
                onChange={(e) => setreview(e.target.value)}
              />
            </div>
           

         
            {/* <div className="mb-3">
              <label>Rating</label>
              <input
                type="number"
                required
                placeholder="Enter product rating"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div> */}
          
            <button className="btn btn-success">Submit</button>
       </form>
        </div>
      </div>

    </>
   
  )
}

export default Createtestimonial