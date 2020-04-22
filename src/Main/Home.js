import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import "./Home.css"

import Pathwayz from "./Pathwayz.jpg"

export default function Home() {
const imageUrl = Pathwayz;
  return (
    <div>
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand href="/">PathWayz</NavbarBrand>

        <Nav type="dark" navbar className="ml-auto" expand="md">
          <NavItem>
            <NavLink>Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Help</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
         <div className="Home" style={{backgroundImage: `url(${imageUrl})` }}>
         <div className="Home-content">
             <p className="slogan">finding the right program and career just got easier than ever.</p>
         </div>
      </div>
      </div>
  );
}
