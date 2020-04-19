import React from "react";
import "./UserProfile.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  Button,
} from "shards-react";

export default function profile() {
  return (
    <Card id="profile">
      <CardHeader>
        {/* <CardTitle> My Career Plan </CardTitle> */}
        <CardImg
          id="profileIMG"
          src="https://png.pngtree.com/png-vector/20190105/ourlarge/pngtree-successpersonaldevelopmentleadercareer-line-icon-png-image_311546.jpg"
        />
      </CardHeader>
      <CardBody>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
        <Button id="profile-button" size="sm" theme="info">
          Software Engineer
        </Button>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
}
