import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import CareersItem from "../components/careers/CareersItem";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  Button,
} from "shards-react";

export default function Profile() {
  const [favourite, setFavourites] = useState([]);
  const [career, setCareers] = useState([]);

  useEffect(() => {
    getCareers();
  }, [career]);

  useEffect(() => {
    getFavourites();
  }, []);

  function getCareers() {
    fetch("http://localhost:3001/personalities/16/requirements")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCareers(data);
      });
  }

  function getFavourites() {
    fetch("http://localhost:3001/favourites")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFavourites(data);
      });
  }
  const careers = career.map((career) => {
    const myFavourites = favourite.map((favourite) => {
      if (favourite.career_id === career.id) {
        return (
          <Button id="profile-button" size="sm" theme="info">
            {career.title}
          </Button>
        );
      }
    });
    return myFavourites;
  });

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
        {/* <Button id="profile-button" size="sm" theme="info">
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
        </Button> */}
        {careers}
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
}
