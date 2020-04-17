import React from "react";

import CareersList from "../Careers/CareersList";
import Programs from "../Careers/ProgramsItem";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";


export default function MainNav() {

    return (
      <div>
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand href="#">PathFinder</NavbarBrand>

          <Nav type="dark" navbar className="ml-auto" expand="md">
          <NavItem>
              <NavLink>
                Signup
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                Login
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                Help
              </NavLink>
              </NavItem>
          </Nav>
          </Navbar>
          <CareersList/>
          <Programs/>
          </div>
    );
  }
