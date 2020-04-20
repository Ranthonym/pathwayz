import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "react-chat-widget/lib/styles.css";
import "./App.css";
import logo from "./logo.svg";

import "./App.css";

// routes
import MainNav from "./Main/MainNav";
import Dashboard from "./Dashboard/SideNav";
import Login from "./containers/Login";
import test from "./components/result/test";

const socket = io.connect("http://localhost:3001");
socket.on("message", function (message) {
  console.log(`The server has a message for you: ${message}`);
});

// The visitor is asked for their username...
const username = prompt("What's your username?");

// It's sent with the signal "little_newbie" (to differentiate it from "message")
socket.emit("session", username);

export default function Application() {
  let [chat, setChat] = useState(false);

  useEffect(() => {
    // addResponseMessage("Welcome to the chat! How can we help you?");
    socket.on("message", function (message) {
      addResponseMessage(message);
    });
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    socket.emit("message", newMessage);
    setChat = true;
    // addResponseMessage(`${username} says: ${newMessage}`);

    //send ajax request via addUserMessage
  };

  return (
    <div className="App">
      {/* <MainNav /> */}
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Chat with a Mentor"
        subtitle="Mentor name goes here"
        showTimeStamp="true"
      />
      <Router>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={test} />
      </Router>
    </div>
  );
}

//   const [merchants, setMerchants] = useState(false);
//   useEffect(() => {
//     getMerchant();
//   }, []);
//   function getMerchant() {
//     fetch("http://localhost:3001")
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         setMerchants(data);
//       });
//   }
//   function createMerchant() {
//     let name = prompt("Enter merchant name");
//     let email = prompt("Enter merchant email");
//     fetch("http://localhost:3001/merchants", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email }),
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   function deleteMerchant() {
//     let id = prompt("Enter merchant id");
//     fetch(`http://localhost:3001/merchants/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   return (
//     <div>
//       {merchants ? merchants : "There is no merchant data available"}
//       <br />
//       <button onClick={createMerchant}>Add merchant</button>
//       <br />
//       <button onClick={deleteMerchant}>Delete merchant</button>
//     </div>
//   );

// }
