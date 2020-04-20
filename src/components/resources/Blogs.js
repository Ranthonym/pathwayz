import React from "react";
import {  Container, Row, Col, Card, CardBody, CardImg, CardFooter, CardHeader, InputGroup,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
}  from "shards-react";
import "./Blogs.css"

export default class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
  return (
    <div>
    <InputGroup className="input">
    <FormInput />
    <Dropdown
      addonType="append"
      open={this.state.open}
      toggle={this.toggle}
    >
       <DropdownToggle theme="info" caret></DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Blogs</DropdownItem>
            <DropdownItem>Videos</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    <Container className="container">
      <Row className="row">
        <Col>
          <Card className="blog-item">
            <CardImg top src="https://www.online-bachelor-degrees.com/wp-content/uploads/2018/05/finance-management-tools.jpg"></CardImg>
            <div align="center"><CardHeader><a href="https://uwaterloo.ca/beyond-ideas/stories/financing/ultimate-guide-financing-your-education">Ultimate guide: Financing your education</a></CardHeader></div>
            <CardBody>
              <p>Getting scholarships and bursaries can make a big difference for your funds.</p>
            </CardBody>
            <CardFooter className="blog-footer"><div>By University of Waterloo</div><div>Feb 28, 2020</div></CardFooter>
          </Card>
        </Col>
          </Row>

        <Row className="row">
        <Col>
        <Card className="blog-item">
            <CardImg top src="https://www.edgeip.com/images/FCK/Image/202003/00-SFG-HowtoWorkandStudyFromHomeSFSIC.jpg" />
            <div align="center"><CardHeader><a href="https://www.schoolfinder.com/Discover/Article/1/5187/How-to-Work-and-Study-From-Home">How to Work and Study From Home</a></CardHeader></div>
            <CardBody>
              <p>Classes cancelled and moving online? COVID-19 is no joke, but neither is your education. Find advice to keep on top of your work.</p>
            </CardBody>
            <CardFooter className="blog-footer"><div>By: Logan Bright</div><div>Mar 16, 2020</div></CardFooter>
          </Card>
        </Col>
        </Row>

        <Row className="row">
        <Col>
        <Card className="blog-item">
            <CardImg top src="https://www.usnews.com/dims4/USNEWS/b1b97c0/2147483647/crop/2000x1334%2B0%2B0/resize/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fb7%2Fbdb972e045cfbc6062bd17aff993%2Fstudentdebt.jpg" />
            <div align="center"><CardHeader><a href="https://www.usnews.com/education/blogs/student-loan-ranger/articles/reasons-to-pay-student-loan-interest-during-school">5 Ways to Self-Motivate When You've Lost Your Drive</a></CardHeader></div>
            <CardBody>
              <p>Classes cancelled and moving online? COVID-19 is no joke, but neither is your education. Find advice to keep on top of your work.</p>
            </CardBody>
            <CardFooter className="blog-footer"><div>By: Logan Bright</div><div>Mar 16, 2020</div></CardFooter>
          </Card>
        </Col>
        </Row>

        <Row className="row">
        <Col>
        <Card className="blog-item">
            <CardImg top src="https://www.edgeip.com/images/FCK/Image/202003/00-SFG-HowtoWorkandStudyFromHomeSFSIC.jpg" />
            <div align="center"><CardHeader><a href="https://www.schoolfinder.com/Discover/Article/1/5187/How-to-Work-and-Study-From-Home">How to Work and Study From Home</a></CardHeader></div>
            <CardBody>
              <p>Classes cancelled and moving online? COVID-19 is no joke, but neither is your education. Find advice to keep on top of your work.</p>
            </CardBody>
            <CardFooter className="blog-footer"><div>By: Logan Bright</div><div>Mar 16, 2020</div></CardFooter>
          </Card>
        </Col>
        </Row>
    </Container>
    </div>
  );
}
}