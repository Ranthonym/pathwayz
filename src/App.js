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

  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setUsers(data);
      });
  }
  function createUser() {
    let name = prompt("Enter user name");
    let email = prompt("Enter user email");
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getUsers();
      });
  }
  function deleteUser() {
    let id = prompt("Enter users id");
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getUsers();
      });
  }
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Chat with a Mentor"
        subtitle="Mentor name goes here"
      />
      {users ? users : "There is no user data available"}
      <br />
      <button onClick={createUser}>Add User</button>
      <br />
      <button onClick={deleteUser}>Delete User</button>

    </div>
  );
}
export default App;
