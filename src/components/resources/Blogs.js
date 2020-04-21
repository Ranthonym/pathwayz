import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardFooter,
  CardHeader,
  InputGroup,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "shards-react";
import "./Blogs.css";
import Videos from "./Videos";
import BlogPost from "./BlogPost";

export default class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
      displayVideos: false,
      displayBlogs: true,
    };
    this._onVideoClick = this._onVideoClick.bind(this);
    this._onBlogClick = this._onBlogClick.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  _onVideoClick() {
    this.setState({
      displayVideos: true,
      displayBlogs: false,
    });
  }

  _onBlogClick() {
    this.setState({
      displayBlogs: true,
      displayVideos: false,
    });
  }

  render() {
    let container;
    if (this.state.displayBlogs) {
      container = (
        <div>
          <BlogPost />
          <BlogPost />
        </div>
      );
    }
    if (this.state.displayVideos) {
      container = (
        <div>
          {" "}
          <Videos />
          <Videos />
        </div>
      );
    }
    return (
      <div>
        <InputGroup id="resources-input" className="input">
          <FormInput placeholder="Search resources" />
          <Dropdown
            addonType="append"
            open={this.state.open}
            toggle={this.toggle}
          >
            <DropdownToggle theme="info" caret></DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={this._onBlogClick}>Blogs</DropdownItem>
              <DropdownItem onClick={this._onVideoClick}>Videos</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
        <Container className="container">{container}</Container>
      </div>
    );
  }
}
