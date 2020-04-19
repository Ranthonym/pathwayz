import React from "react";
import Popup from "reactjs-popup";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormInput,
  FormGroup,
} from "shards-react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar type="dark" theme="info" expand="md">
          <NavbarBrand href="#">PathFinder</NavbarBrand>

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
        <Popup
          trigger={<button className="button"> Login </button>}
          modal
          closeOnDocumentClick
        >
          <div id="popup">
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
          </div>
        </Popup>
        <Popup
          trigger={<button className="button"> Signup </button>}
          modal
          closeOnDocumentClick
        >
          <div id="popup">
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Login;
