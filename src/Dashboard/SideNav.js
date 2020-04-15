import React from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";

export default class DashNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand href="#">PathFinder</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>

          <Nav type="dark" navbar className="ml-auto" expand="md">
          <NavItem>
          <Button theme="light"> 
          Chat with a mentor!
          </Button>
              </NavItem>
              <NavItem>
              <NavLink>
                About
              </NavLink>
              </NavItem>
            <Dropdown
              nav={true}
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
              <i className="fa fa-fw fa-user"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Dashboard</DropdownItem>
                <DropdownItem>Career Quiz</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}