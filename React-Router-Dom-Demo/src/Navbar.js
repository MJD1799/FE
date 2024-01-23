import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        {({ isActive }) => {
          console.log("config:", isActive);
          return "Home";
        }}
      </NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/orders">orders</NavLink>
    </nav>
  );
};

export default Navbar;
