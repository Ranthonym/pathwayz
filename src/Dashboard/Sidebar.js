import React from "react";
import "./Sidebar.css";
import SideNav from "./SideNav";

export default function Sidebar() {
return (
<div>
  <div>
  <SideNav/>
  </div>
  <div className="sidebar">
  <a href="#home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
  <a href="#services"><i className="fa fa-fw fa-envelope"></i> Messages</a>
  <a href="#clients"><i className="fa fa-fw fa-user"></i>Resources</a>
  <a href="#contact"><i className="fa fa-fw fa-search"></i>Explore Careers</a>
  </div>
</div>
) 
}