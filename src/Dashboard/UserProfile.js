import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function UserProfile() {
  return (
    <div>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>User Profile</CardHeader>
      <CardImg src="./user.png" />
      <CardBody>
        <CardTitle>Fake User</CardTitle>
        <p>User111@gmail.com</p>
        <Button theme="info">View Assessment</Button>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
    </div>
  );
}