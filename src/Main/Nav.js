import React from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";


export default function navBar() {

    return (
      <Navbar type="dark" theme="warning" expand="md">
        <NavbarBrand href="#">PathFinder</NavbarBrand>
        </Navbar>

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
          </Nav>
    );
  }
