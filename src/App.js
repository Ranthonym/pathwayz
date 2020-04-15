import React, { useState, useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import logo from "./logo.svg";
function App() {
  useEffect(
    () => addResponseMessage("Welcome to the chat! How can we help you?"),
    []
  );

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage("response text");
    //send ajax request to createNewMessage
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("checking");
  //     //make ajax request from server
  //     addResponseMessage("response text");
  //   }, 1000);
  // });

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Chat with a Mentor"
        subtitle="Mentor name goes here"
      />
  );
}
export default App;
