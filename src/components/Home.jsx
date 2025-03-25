import React from "react";
import Nav from "./Nav";
import StarComp from "./StarComp";
import CardBlock from "./CardBlock";
import Bento from "./Bento";
import DevTeam from "./DevTeam";
import DesignTeam from "./DesignTeam";
import Footer from "./Footer/Footer";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <StarComp />
      <img src="/grid.svg" alt="grid" className="grid" />
      <CardBlock />
      <Bento />
      <DevTeam />
      <DesignTeam />
      <Footer/>
    </div>
  );
};

export default Home;
