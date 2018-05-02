import React from "react";
import {NavLink} from "react-router-dom";
import "./navFooter.css";

let navFooter = () => {
  return (
    <nav>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/battle">Fight</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
      <NavLink to="/stats">Player Stats</NavLink>
    </nav>
  );
};

export default navFooter;
