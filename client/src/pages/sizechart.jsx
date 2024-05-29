import React from 'react'
import regularsize from '../componets/images/regular.jpg'
import oversizedsize from '../componets/images/oversizedsize.jpg'
import "./sizechart.css"
const sizechart = () => {
  return (
    <>
    
    <div className='reguar'>
 
    <img src={regularsize}></img>
    </div>
  
    <div className='reguar'>
   
    <img src={oversizedsize}></img>
    </div>
  
    </>
  
  )
}

export default sizechart