import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { render } from "react-dom";

// routes
import Nav from "./Main/Nav";
import Navbar from "./Dashboard/Navbar";

export default function Application() {
  return(
    <Router>
      <Switch>
        <Route path="/" component={Nav} />
        <Route path="/Dashboard" component={Navbar} />
      </Switch>
      </Router>
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


