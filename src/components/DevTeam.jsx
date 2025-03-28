import React from "react";
import "../CSS/DevTeam.css";
import TeamCard from "./TeamCard";

const DevTeam = () => {

  const devTeam = [
    {
      id: 1,
      name: "Praharsha",
      pic: "/teamcard-Praharsha.svg",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
      gif:"/teamcard-PRAHARSHA.gif"
    },
    {
      id: 2,
      name: "Ajay",
      pic: "/teamcard-Ajay.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
      gif:"/teamcard-AJAY.gif"
    },
    {
      id: 3,
      name: "Preetham",
      pic: "/teamcard-Preetham.svg",
      link: "https://www.linkedin.com/in/preetham-nelaturi-6a6696290/",
      gif:"/teamcard-PREETHAM.gif"
    },
    {
      id: 4,
      name: "Nancy",
      pic: "/teamcard-Nancy.svg",
      link: "https://www.linkedin.com/in/nancy-dhakate-615316282/",
      gif:"/teamcard-NANCY.gif"
    }
  ];

  return (
    <div className="dev-team">
      <div className="dev-team-head">
        <div className="code-wizards">
          <img src="/left-curve-tc.svg" alt="" className="left-w" />
          <p>Code Wizards</p>
          <img src="/right-curve-tc.svg" alt="" className="right-w" />
        </div>
        <p className="dt-content">
          Stacking <span>'Solutions'</span>, snacking on problems, and keeping
          our bugs low-carbs
        </p>
      </div>
      <div className="dev-team-members">
        {devTeam.map((member) => (
          <TeamCard key={member.id} props={member} />
        ))}
      </div>
    </div>
  );
};

export default DevTeam;
