import React from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";


export default function MainNav() {

    return (
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
    );
  }
