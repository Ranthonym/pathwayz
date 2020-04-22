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
  Button,
  CardImg,
  CardTitle,
} from "shards-react";

export default function Login() {
  return (
    <div>
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand>PathWayz</NavbarBrand>
        <Nav type="dark" navbar className="ml-auto" expand="md">
          <NavItem>
            <Popup
              trigger={<NavLink>Login</NavLink>}
              modal
              closeOnDocumentClick
            >
              <div id="popup">
                <div>
                  <Form>
                    <FormGroup>
                      <label htmlFor="username">Username</label>
                      <FormInput id="username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="password">Password</label>
                      <FormInput
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <Button
                      theme="info"
                      className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                      href="/dashboard"
                    >
                      Sign In
                    </Button>
                  </Form>
                </div>
                <div id="popup">
                  <CardImg
                    id="loginIMG"
                    src="https://png.pngtree.com/png-vector/20190105/ourlarge/pngtree-successpersonaldevelopmentleadercareer-line-icon-png-image_311546.jpg"
                  />
                </div>
              </div>
            </Popup>
          </NavItem>
          <NavItem>
            <Popup
              trigger={<NavLink>Signup</NavLink>}
              modal
              closeOnDocumentClick
            >
              <div id="popup">
                <div>
                  <Form>
                    <FormGroup>
                      <label htmlFor="username">Name</label>
                      <FormInput id="username" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="username">Email</label>
                      <FormInput id="username" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="password">Password</label>
                      <FormInput
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </FormGroup>

                    <Button
                      theme="info"
                      className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                      href="/dashboard"
                    >
                      Create Account
                    </Button>
                  </Form>
                </div>
                <div id="popup">
                  <CardImg
                    id="loginIMG"
                    src="https://png.pngtree.com/png-vector/20190105/ourlarge/pngtree-successpersonaldevelopmentleadercareer-line-icon-png-image_311546.jpg"
                  />
                </div>
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
