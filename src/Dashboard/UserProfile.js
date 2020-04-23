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
      <Card id="userprofile" style={{ maxWidth: "600px" }}>
        <CardHeader>
          <div align="center"><CardTitle>User Profile</CardTitle></div>
        </CardHeader>
        <CardImg
          id="profile-pic"
          className="userImg"
          src="https://avatars1.githubusercontent.com/u/43259449?s=460&v=4"
        />
        <CardBody>
          <div align="center">
            <CardTitle>Asmaa</CardTitle>
          </div>
          <div align="center">Type ENTJ: The Field Marshall</div>
          <CardHeader>
            <div>
              You tend to be organized and logical above all else. You were born
              to lead and can help steer an organization towards their vision,
              using your excellent organizing and understanding of what needs to
              get done.
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
