import React, { useState } from "react";
import "./Sidebar.css";
import { Button } from "shards-react";
import UserProfile from "./UserProfile";
import Chat from "./chat";

export default function Sidebar(props) {
  const [messages, setMessages] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [resources, setResources] = useState(false);
  const [exploreCareers, setExploreCareers] = useState(false);
  let rightcontainer;

  function handleMessagesClick() {
    props.quiz(false);
    setUserProfile(false);
    setResources(false);
    setExploreCareers(false);
    props.setMessages(true);
  }
  function handleUserProfileClick() {
    props.quiz(false);
    setMessages(false);
    setResources(false);
    setExploreCareers(false);
    setUserProfile(!userProfile);
  }
  function handleResourcesClick() {
    props.quiz(false);
    setMessages(false);
    setUserProfile(false);
    setExploreCareers(false);
    setResources(!resources);
  }
  function handleExploreCareersClick() {
    props.quiz(false);
    setMessages(false);
    setUserProfile(false);
    setResources(false);
    setExploreCareers(!exploreCareers);
  }

  if (props.message) {
    rightcontainer = <Button theme="light">Messages</Button>;
    //    rightcontainer = <Chat />;
  }
  if (userProfile) {
    rightcontainer = <UserProfile />;
  }
  if (resources) {
    rightcontainer = <Button theme="light">Resources</Button>;
  }
  if (exploreCareers) {
    rightcontainer = <Button theme="light">Explore Careers</Button>;
  }

  return (
    <div>
      <div className="sidebar">
        <a onClick={handleUserProfileClick} href="#profile">
          <i className="fa fa-fw fa-home"></i>Dashboard
        </a>
        <a onClick={handleMessagesClick} href="#messages">
          <i className="fa fa-fw fa-envelope"></i> Messages
        </a>
        <a onClick={handleResourcesClick} href="#resources">
          <i className="fa fa-fw fa-edit"></i>Resources
        </a>
        <a onClick={handleExploreCareersClick} href="#search">
          <i className="fa fa-fw fa-search"></i>Explore Careers
        </a>
      </div>
      <div id="rightcontainer">{rightcontainer}</div>
    </div>
  );
}
