import React from "react";
import "./Sidebar.css";
// import UserProfile from "./UserProfile";



export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <a href="#profile">
          <i className="fa fa-fw fa-home"></i>Dashboard
        </a>
        <a href="#messages">
          <i className="fa fa-fw fa-envelope"></i> Messages
        </a>
        <a href="#resources">
          <i className="fa fa-fw fa-edit"></i>Resources
        </a>
        <a href="#search">
          <i className="fa fa-fw fa-search"></i>Explore Careers
        </a>
      </div>
  {/* <UserProfile/> */}
    </div>
  );
}

