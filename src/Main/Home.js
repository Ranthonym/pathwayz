import React from "react";
import Popup from "reactjs-popup";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormInput,
  FormGroup,
  CardImg
} from "shards-react";

import "./Home.css";
import Testimonial from "./Testimonial";

import Pathwayz from "./Pathwayz.jpg";


export default function Home() {
  const imageUrl = Pathwayz;
  return (
    <div>
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand className="dash-navbar" href="/">
        <div className="dash-nav">
        <img className="logo" src="pathwayz-logo.png"></img>
        <div className="logo-name">PathWayz</div>
        </div>
        </NavbarBrand>
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
                    <FormGroup>
                      <label htmlFor="username">Image URL</label>
                      <FormInput id="username" placeholder="Image URL" />
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

      <div className="Home1" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="Home-content1">
          <p className="slogan">
            finding the right program and career just got easier.
          </p>
        </div>
      </div>

      <div className="Home2">
        <div className="Home-content2">
          <div className="home-button">
          <Button theme="dark" size="lg">
            <div ><strong>Confused, nervous, or unsure 
              <div>about life after high-school?</div>
              <div>speak to one of our career counsellors today</div>
              <div>or take our career assessment!</div></strong></div>
          </Button>

          </div>

          <div className="testimonial">
            <Testimonial />
          </div>

          <div className="mentors">
            <h3 className="mentor-title">Our Mentors</h3>
            <img
              className="avatar-size"
              alt="Remy Sharp"
              src="https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg"
            />
            <img
              className="avatar-size"
              alt="Travis Howard"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg"
            />
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
            />
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjM1MzgxMl5BMl5BanBnXkFtZTcwNDI0NDE5NQ@@._V1_UY256_CR4,0,172,256_AL_.jpg"
            />
          </div>
          <div className="mentors">
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://randomuser.me/api/portraits/men/81.jpg"
            />
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://randomuser.me/api/portraits/women/86.jpg"
            />
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://pbs.twimg.com/profile_images/950813895291297794/IAUhzxPw.jpg"
            />
            <img
              className="avatar-size"
              alt="Cindy Baker"
              src="https://randomuser.me/api/portraits/women/65.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
