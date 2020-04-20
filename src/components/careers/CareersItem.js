
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
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "shards-react";

export default function CareersItem(props) {
  const [favourites, setFavourites] = useState(false);
  useEffect(() => {
    getFavourite();
  }, []);

  function getFavourite() {
    fetch("http://localhost:3001/favourites")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFavourites(data);
      });
  }
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
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        // console.log(data);
        // alert(data);
        getFavourite();
      });
  }
  return (
    <Card key={props.id} small className="h-100">
      <CardHeader className="border-bottom">
        <h4>{props.title}</h4>
        <h5>{props.outlook}</h5>
      </CardHeader>
      <CardBody className="pt-0">
        <div>
          <h5>Description</h5>
          {props.description}
        </div>
        <Row className="border-bottom py-2 bg-light">
          <Col>

            <div align="center">
              <h5>Average Salary</h5>
              {this.props.salary}
            </div>

//             </Col>
//           </Row>
//           <div><h5 className="education">Education</h5>{this.props.education}</div>
//           <Button
//                 onClick={this.showProgram}
//                 theme="info"
//                 className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
//               >
//                 View programs related to this career &rarr;
//               </Button>
//         <CardFooter><div align="center">Legend: The job opportunities can be: ☆ ☆ ☆ Undetermined ★ ☆ ☆ Limited ★ ★ ☆ Fair ★ ★ ★ Good</div><i class="fa fa-heart"></i></CardFooter>
//         </PopoverBody>
//         </Popover>
//         <div>{program}</div>
//         </div>
//     );
//   }

          </Col>
        </Row>
        <div>
          <h5 className="education">Education</h5>
          {props.education}
        </div>
        <Button
          onClick={props.onClick}
          theme="info"
          className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
        >
          View programs related to this career &rarr;
        </Button>
        <Button
          // onClick={props.onClick}
          theme="info"
          className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
        >
          <span onClick={addFavourite}>Add Career to Dashboard</span>
        </Button>
      </CardBody>
      <CardFooter>
        <div align="center">
          Legend: The job opportunities can be: ☆ ☆ ☆ Undetermined ★ ☆ ☆ Limited
          ★ ★ ☆ Fair ★ ★ ★ Good
        </div>
      </CardFooter>
    </Card>
  );

}
