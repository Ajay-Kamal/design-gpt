import React from 'react';
import "../CSS/DesTeam.css";
import TeamCard from './TeamCard';

const DesignTeam = () => {

  const devTeam = [
    {
      id: 1,
      name: "Praharsha",
      pic: "/teamcard-Praharsha.svg",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
    },
    {
      id: 2,
      name: "Ajay",
      pic: "/teamcard-Ajay.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
    },
    {
      id: 3,
      name: "Preetham",
      pic: "/teamcard-Preetham.svg",
      link: "https://www.linkedin.com/in/preetham-nelaturi-6a6696290/",
    },
    {
      id: 4,
      name: "Nancy",
      pic: "/teamcard-Nancy.svg",
      link: "https://www.linkedin.com/in/nancy-dhakate-615316282/",
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
        <p className="dt-content">
          Running on 4 hours of sleep and 100% determination to ship <span>'Perfection'</span>
        </p>
      </div>
      <div className="dev-team-members">
        {devTeam.map((member) => (
          <TeamCard key={member.id} props={member} />
        ))}
      </div>
    </div>
  )
}
 
export default DesignTeam;