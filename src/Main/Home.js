import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import "./Home.css";
import MainNav from "./MainNav";

import Pathwayz from "./Pathwayz.jpg";

export default function Home() {
  const imageUrl = Pathwayz;
  return (
    <div>
      <MainNav></MainNav>
      <div id="home">
        <div id="home-image" className="Home">
          <div className="Home-content">
            <p className="slogan">
              finding the right program and career just got easier than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
