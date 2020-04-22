import React from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "shards-react";


import "./Home.css";
import Testimonial from "./Testimonial"

import Pathwayz from "./Pathwayz.jpg";

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
      <div className="Home1" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="Home-content1">
          <p className="slogan">
            finding the right program and career just got easier than ever.
          </p>
        </div>
      </div>

      <div className="Home2">
        <div className="Home-content2">

          <div className="home-button">
          <Button theme="warning" size="lg">
            Take our Career Assessment Today!
          </Button>
          </div>

          <div className="testimonial">
            <Testimonial/>
          </div>

          <div className="mentors">
          <p className="mentor-title">Our Mentors!</p>
          <img className="avatar-size" alt="Remy Sharp" src="https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg" />
          <img className="avatar-size" alt="Travis Howard" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg" />
          <img className="avatar-size" alt="Cindy Baker"  src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg" />
          </div>
          <div className="mentors">
          <img className="avatar-size" alt="Cindy Baker"  src="https://randomuser.me/api/portraits/men/81.jpg" />
          <img className="avatar-size" alt="Cindy Baker"  src="https://randomuser.me/api/portraits/women/86.jpg" />
          <img className="avatar-size" alt="Cindy Baker"  src="https://pbs.twimg.com/profile_images/950813895291297794/IAUhzxPw.jpg" />
          </div>
      </div>
    </div>
    </div>
  );
}
