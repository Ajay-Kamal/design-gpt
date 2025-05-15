import React from 'react';
import "../CSS/DesTeam.css";
import TeamCard from './TeamCard';

const DesignTeam = () => {

  const desTeam = [
    {
      id: 1,
      name: "Rashika1",
      pic: "/teamcard-NUPUR.png",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
      gif:"/teamcard-PRAHARSHA.gif"
    },
    {
      id: 2,
      name: "Rashika2",
      pic: "/teamcard-RASHIKA.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
      gif:"/teamcard-AJAY.gif"
    },
    {
      id: 3,
      name: "Rashika3",
      pic: "/teamcard-Preetham.svg",
      link: "https://www.linkedin.com/in/preetham-nelaturi-6a6696290/",
      gif:"/teamcard-PREETHAM.gif"
    },
    {
      id: 4,
      name: "Rashika4",
      pic: "/teamcard-Nancy.svg",
      link: "https://www.linkedin.com/in/nancy-dhakate-615316282/",
      gif:"/teamcard-NANCY.gif"
    },
    {
      id: 5,
      name: "Rashika5",
      pic: "/teamcard-Praharsha.svg",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
      gif:"/teamcard-PRAHARSHA.gif"
    },
    {
      id: 6,
      name: "Rashika6",
      pic: "/teamcard-Ajay.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
      gif:"/teamcard-AJAY.gif"
    }
  ];

  return (
    <div className='des-team'>
       <div className="des-team-head">
        <div className="overtime-artists">
          <img src="/left-curve-tc.svg" alt="" className="left-w" />
          <p>Overtime Artists</p>
          <img src="/right-curve-tc.svg" alt="" className="right-w" />
        </div>
        <p className="ds-content">
          Running on 4 hours of sleep and 100% determination to ship <span>'Perfection'</span>
        </p>
      </div>
      <div className="des-team-members">
        <div className='des-is-art'>
         <p>Design is Art!</p>
         <img src="./des-team-pointer.svg" alt="->" className='des-pntr1'/>
        </div>
          <div className='des-left-sec'>
            <TeamCard props={desTeam[0]}/>
          </div>
          <div className='des-mid-sec'>
            <TeamCard props={desTeam[1]}/>
            <TeamCard props={desTeam[2]}/>
            <TeamCard props={desTeam[3]}/>
            <TeamCard props={desTeam[4]}/>
          </div>
          <div className='des-right-sec'>
            <TeamCard props={desTeam[5]}/>
          </div>
          <div className='des-is-czy'>
          <p>Crazzyyy!</p>
          <img src="./des-team-pointer.svg" alt="->" className='des-pntr2'/>
          </div>
      </div>
    </div>
  )
}
 
export default DesignTeam;