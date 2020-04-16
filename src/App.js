import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// routes
import MainNav from "./Main/MainNav";
import Sidebar from "./Dashboard/Sidebar";

import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import logo from "./logo.svg";
import "./App.css";

export default function Application() {
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
      <Router>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/Dashboard" component={Sidebar} />
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
