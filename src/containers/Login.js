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
              <Popup
                trigger={<NavLink>Signup</NavLink>}
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
            </NavItem>
            <NavItem>
              <Popup
                trigger={<NavLink>Login</NavLink>}
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
            </NavItem>
            <NavItem>
              <NavLink>Help</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Login;
