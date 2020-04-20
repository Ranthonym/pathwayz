import React from "react";
import "./UserProfile.css";
import Profile from "./Profile";

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
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardImg
          className="userImg"
          src="https://avatars.servers.getgo.com/emails/%7B0%7D/medium.jpg"
        />
        <CardBody>
          <div align="center">
            <CardTitle> User </CardTitle>
          </div>
          <div align="center">user@example.com</div>
          <CardHeader>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text.
            </div>
          </CardHeader>
          <div align="center">
            <Button id="userprofile-button" size="sm" theme="info">
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
