import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// routes
import MainNav from "./Main/MainNav";
import Sidebar from "./Dashboard/Sidebar";

export default function Application() {
  return(
    <Router>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/Dashboard" component={Sidebar} />
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


