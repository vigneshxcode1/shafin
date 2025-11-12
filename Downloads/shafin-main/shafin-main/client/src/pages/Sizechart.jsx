import React from 'react'
import sizeimg from '../componets/images/size.jpeg'
const Sizechart = () => {
  return (
    <>
     <h1 className='titlesize'>Sizechart in inches</h1>
     <div className="imgsize">
       
        <img src={sizeimg} alt="" />
    </div>
    </>
   
  )
}

export default Sizechart