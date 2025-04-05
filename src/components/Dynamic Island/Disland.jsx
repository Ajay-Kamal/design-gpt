import React from 'react'
import "./Disland.css";

const Disland = () => {
  return (
    <div className='dynamic-island'>
     <img src="./navbar-union.svg" alt="" className='di-union'/>
     <div className="di-hover-rectangle"></div>
     <div className="di-movable-sec">
      <div className="di-hover-circle"></div>
     </div>
    </div>
  )
}

export default Disland