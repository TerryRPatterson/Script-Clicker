import React from "react";
import {NavLink} from "react-router-dom";
import "navFooter.css";

let navFooter = () => {
  return (
    <nav>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/battle" className="disabled" tabIndex="-1">Fight</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </nav>
  );
};
