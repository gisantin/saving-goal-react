import React from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo  className="navbar__logo"/>
    </nav>
  );
};

export default Navbar;
