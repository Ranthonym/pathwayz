import React, { useState } from "react";
import "./Sidebar.css";
import { Button } from "shards-react";
import UserProfile from "./UserProfile";
import Chat from "../components/result/test";
import Blogs from "../components/resources/Blogs";
import Mood from "./Mood";

export default function Sidebar(props) {
  const [exploreCareers, setExploreCareers] = useState(false);
  let rightcontainer;

  function handleMessagesClick() {
    props.quiz(false);
    props.setUserProfile(false);
    props.setResources(false);
    props.setExploreCareers(false);
    props.setMessages(true);
    props.setMoodMonitor(false);
  }
  function handleUserProfileClick() {
    props.quiz(false);
    props.setMessages(false);
    props.setResources(false);
    props.setExploreCareers(false);
    props.setUserProfile(true);
    props.setMoodMonitor(false);
  }
  function handleResourcesClick() {
    props.quiz(false);
    props.setMessages(false);
    props.setUserProfile(false);
    props.setExploreCareers(false);
    props.setResources(true);
    props.setMoodMonitor(false);
  }
  function handleExploreCareersClick() {
    props.quiz(false);
    props.setMessages(false);
    props.setUserProfile(false);
    props.setResources(false);
    props.setExploreCareers(true);
    props.setMoodMonitor(false);
  }
  function handleMoodMonitorClick() {
    props.quiz(false);
    props.setMessages(false);
    props.setUserProfile(false);
    props.setResources(false);
    props.setExploreCareers(false);
    props.setMoodMonitor(true);
  }

  if (props.message) {
    rightcontainer = <Chat />;
  }
  if (props.userProfile) {
    rightcontainer = <UserProfile />;
  }
  if (props.resources) {
    rightcontainer = <Blogs />;
  }
  if (props.exploreCareers) {
    rightcontainer = <Button theme="light">Explore Careers</Button>;
  }
  if (props.moodMonitor) {
    rightcontainer = <Mood />;
  }

  return (
    <div>
      <div className="sidebar">
        <a onClick={handleUserProfileClick}>
          <i className="fa fa-fw fa-home"></i>Dashboard
        </a>
        <a onClick={handleMessagesClick}>
          <i className="fa fa-fw fa-envelope"></i> Messages
        </a>
        <a onClick={handleResourcesClick}>
          <i className="fa fa-fw fa-edit"></i>Resources
        </a>
        <a onClick={handleExploreCareersClick}>
          <i className="fa fa-fw fa-search"></i>Explore Careers
        </a>
        <a onClick={handleMoodMonitorClick}>
          <span class="material-icons">insert_emoticon</span>Mood Monitor
        </a>
      </div>
      <div id="rightcontainer">{rightcontainer}</div>
    </div>
  );
}
