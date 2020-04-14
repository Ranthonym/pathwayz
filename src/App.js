import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setUsers(data);
      });
  }

  function addUser() {
    let name = prompt("Enter users name");
    let email = prompt("Enter users email");
    let password = prompt("Enter users password");

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getUser();
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
        getUser();
      });
  }
  return (
    <div>
      {users ? users : "There is no user data available"}
      <br />
      <button onClick={addUser}>Add User</button>
      <br />
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}
export default App;
