import React from "react";
import NavbarItems from "./NavbarItems";

// import navbar data
import { navbarData } from "@/data/data";

const Navbar = () => {
  return <NavbarItems navData={navbarData[0]} />;
};

export default Navbar;
