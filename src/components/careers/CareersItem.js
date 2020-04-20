import React from "react";
import {
  Row,
  Col,
  Button,
  CardFooter,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "shards-react";
import ProgramsItem from "./ProgramsItem";
export default class CareersItem extends React.Component {
  constructor(props) {
    super(props);
    this.showProgram = this.showProgram.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      program: false,
      open: false,
    };
  }
  showProgram() {
    this.setState({
      program: !this.state.program,
    });
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    const isShowingProgram = this.state.program;
    let program;
    if (isShowingProgram) {
      program = <ProgramsItem />;
    }
    return (
      <div>
        <div>
          <Button
            className="careerItem"
            theme="light"
            id="popover-1"
            onClick={this.toggle}
          >
            <h4>{this.props.title}</h4>
          </Button>
        </div>
        <Popover
          placement="bottom"
          open={this.state.open}
          toggle={this.toggle}
          target="#popover-1"
        >
          <PopoverHeader>
            <h5>{this.props.outlook}</h5>
          </PopoverHeader>
          <PopoverBody>
            <div>
              <h5>Description</h5>
              {this.props.description}
            </div>
            <Row className="border-bottom py-2 bg-light">
              <Col>
                <div align="center">
                  <h5>Average Salary</h5>
                  {this.props.salary}
                </div>
              </Col>
            </Row>
            <div>
              <h5 className="education">Education</h5>
              {this.props.education}
            </div>
            <Button
              onClick={this.showProgram}
              theme="info"
              className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
            >
              View programs related to this career &rarr;
            </Button>
            <CardFooter>
              <div align="center">
                Legend: The job opportunities can be: ☆ ☆ ☆ Undetermined ★ ☆ ☆
                Limited ★ ★ ☆ Fair ★ ★ ★ Good
              </div>
              <i class="fa fa-heart"></i>
            </CardFooter>
          </PopoverBody>
        </Popover>
        <div>{program}</div>
      </div>
    );
  }
}
