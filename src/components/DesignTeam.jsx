import React from 'react';
import "../CSS/DesTeam.css";

const DesignTeam = () => {
  return (
    <div className='des-team'>
       <div className="des-team-head">
        <div className="overtime-artists">
          <img src="/left-curve-tc.svg" alt="" className="left-w" />
          <p>Overtime Artists</p>
          <img src="/right-curve-tc.svg" alt="" className="right-w" />
        </div>
        <p className="dt-content">
          Running on 4 hours of sleep and 100% determination to ship <span>'Perfection'</span>
        </p>
      </div>
    </div>
  )
}

export default DesignTeam;