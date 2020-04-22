// import React from "react";
// import { Row, Col, Button, CardFooter, Popover, PopoverBody, PopoverHeader} from "shards-react";
// import ProgramsItem from "./ProgramsItem"

// export default class CareersItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.showProgram = this.showProgram.bind(this);
//     this.toggle = this.toggle.bind(this);

//     this.state = {
//       program: false,
//       open: false
//     };
//   }

//   showProgram() {
//     this.setState({
//       program: !this.state.program,
//     });
//   }

//   toggle() {
//     this.setState({
//       open: !this.state.open
//     });
//   }

//     render() {
//       const isShowingProgram = this.state.program;
//       let program;
//       if (isShowingProgram) {
//         program = <ProgramsItem/>;
//       }
//     return (
//         <div>
//         <div>
//         <Button className="careerItem" theme="light" id="popover-1" onClick={this.toggle}>
//           <h4>{this.props.title}</h4>
//           </Button>
//           </div>
//           <Popover
//           placement="bottom"
//           open={this.state.open}
//           toggle={this.toggle}
//           target="#popover-1"
//           >
//           <PopoverHeader><h5>{this.props.outlook}</h5></PopoverHeader>
//           <PopoverBody>
//           <div>
//             <h5>Description</h5>
//             {this.props.description}
//           </div>
//           <Row className="border-bottom py-2 bg-light">
//             <Col>

import React, { useState, useEffect } from "react";
import { Button } from "shards-react";

export default function FavouriteButton(props) {
  // const [favourites, setFavourites] = useState(false);
  // useEffect(() => {
  //   getFavourite();
  // }, []);

  // function getFavourite() {
  //   fetch("http://localhost:3001/favourites")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setFavourites(data);
  //     });
  // }
  function addFavourite() {
    let user_id = 1;
    console.log(props.id);
    let career_id = props.id;
    fetch("http://localhost:3001/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, career_id }),
    }).then((response) => {
      return response.text();
    });
    // .then((data) => {
    //   getFavourite();
    // });
  }
  return (
    <Button
      theme="info"
      className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
    >
      <span onClick={addFavourite}>Add Career to Dashboard &hearts;</span>
    </Button>
  );
}
