import React from "react";
import {NavLink} from "react-router-dom";
import "./navFooter.css";

let navFooter = () => {
  return (
    <nav>
      <NavLink to="/main">main</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </nav>
  );
};

export default navFooter;
