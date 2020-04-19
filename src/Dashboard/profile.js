import React from "react";
import "./UserProfile.css";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

export default function profile() {
  return (
    <Card id="profile">
      <CardHeader>User Profile</CardHeader>
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
  );
}
