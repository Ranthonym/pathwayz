import React from "react";
import "./UserProfile.css";
import Profile from "./profile";

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

export default function UserProfile() {
  return (
    <div id="profile-container">
      <Card id="userprofile" style={{ maxWidth: "300px" }}>
        <CardHeader>User Profile</CardHeader>
        <CardImg
          className="userImg"
          src="https://avatars.servers.getgo.com/emails/%7B0%7D/medium.jpg"
        />
        <CardBody>
          <div align="center">
            <CardTitle>Fake User</CardTitle>
          </div>
          <div align="center">
            <p>User111@gmail.com</p>
          </div>
          <div align="center">
            <Button size="sm" theme="info">
              View Assessment
            </Button>
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Profile />
    </div>
  );
}
