import React from "react";
import Nav from "./components/Nav";
import StarComp from "./components/StarComp";
import CardBlock from "./components/CardBlock";
import Bento from "./components/Bento";

const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <StarComp />
      <img src="/grid.svg" alt="grid" className="grid" />
      <CardBlock/>
      <Bento/>
    </div>
  );
};

export default Home;
