import React from "react";

import {
  Row,
  Col, 
  Button, 
  CardFooter,
  PopoverBody,
  Popover,
  PopoverHeader
} from "shards-react";

export default class ProgramsItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (

      <div>
        <div>
         <Button className="programItem" theme="light" id="popover-1" onClick={this.toggle}>
          <h4>{this.props.title}</h4>
          <h5>{this.props.school}</h5>
          </Button>

          </div>
          <Popover
          placement="bottom"
          open={this.state.open}
          toggle={this.toggle}
          target="#popover-1"
          >
          <PopoverHeader><h5>What You'll Learn</h5></PopoverHeader>
        <PopoverBody>
          <div>
            {this.props.description}
            </div>
          <Row className="border-bottom py-2 bg-light">
            <Col>
              <div align="center">
                <h5>Career Paths Include</h5>

                {this.props.courses}

              </div>
            </Col>
          </Row>
          <div>
            <h5 className="education">Admission Requirements</h5>
            {this.props.required_courses}
            {this.props.grade_average}
            </div>
            <Button
                onClick={this.props.onClick}
                theme="info"
                className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                &larr; Back
              </Button>
              <CardFooter></CardFooter>
        </PopoverBody>
       </Popover>
        </div>
    );
  }
}




