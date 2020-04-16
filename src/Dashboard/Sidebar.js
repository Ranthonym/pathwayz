import React from "react";
import "./Sidebar.css";
import SideNav from "./SideNav";
// import QuizApp from "../components/QuizApp";

export default function Sidebar() {
  return (
    <div>
      <div>
        <SideNav />
      </div>
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
      {/* <div>
        <QuizApp totalQuestions={5} />
      </div> */}
    </div>
  );
}
