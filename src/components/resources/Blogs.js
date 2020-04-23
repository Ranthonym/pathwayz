import React from "react";
import { Container, Breadcrumb, BreadcrumbItem } from "shards-react";

import "./Blogs.css";
import Videos from "./Videos";
import BlogPost from "./BlogPost";
export default class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayVideos: false,
      displayBlogs: true,
    };
    this._onVideoClick = this._onVideoClick.bind(this);
    this._onBlogClick = this._onBlogClick.bind(this);
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
      <div align="center">
        <Breadcrumb className="breadcrumbs">
          <BreadcrumbItem>
            <a href="#" onClick={this._onBlogClick}>
              <span class="material-icons">subtitles</span>
              <div>Blogs</div>
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#" onClick={this._onVideoClick}>
              <span class="material-icons">video_library</span>
              <div>Videos</div>
            </a>
          </BreadcrumbItem>
        </Breadcrumb>
        </div>
        <Container className="container">{container}</Container>
      </div>
    );
  }
}
