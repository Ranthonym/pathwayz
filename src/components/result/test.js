import React, { Component } from "react";
import MessageIn from "./messageIncoming";
import MessageOut from "./messageSent";

// const top5Careers = ["career1", "career2", "career3", "career4", "career5"];

export default class Test extends Component {
  render() {
    return (
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-4 border-right">
            <div class="settings-tray">
              <img
                class="profile-image"
                src="https://picsum.photos/id/1027/2848/4272"
                alt="Profile img"
              />
              <span class="settings-tray--right">
                <i class="material-icons">cached</i>
                <i class="material-icons">message</i>
                <i class="material-icons">menu</i>
              </span>
            </div>

            {/* <div class="search-box">
              <div class="input-wrapper">
                <i class="material-icons">search</i>
                <input placeholder="Search here" type="text" />
              </div>
            </div> */}

            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                alt=""
              />
              <div class="text">
                <h6>Layla</h6>
                <p class="text-muted">Hey, you're arrested!</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr />
            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                alt=""
              />
              <div class="text">
                <h6>Layla</h6>
                <p class="text-muted">Wanna grab a beer?</p>
              </div>
              <span class="time text-muted small">00:32</span>
            </div>
            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                alt=""
              />
              <div class="text">
                <h6>Layla</h6>
                <p class="text-muted">Wanna grab a beer?</p>
              </div>
              <span class="time text-muted small">00:32</span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="settings-tray">
              <div class="friend-drawer no-gutters friend-drawer--grey">
                <img
                  class="profile-image"
                  src="https://i.picsum.photos/id/1005/5760/3840.jpg"
                  alt=""
                />
                <div class="text">
                  <h6>James</h6>
                  <p class="text-muted">Layin' down the law since ...</p>
                </div>
                <span class="settings-tray--right">
                  <i class="material-icons">cached</i>
                  <i class="material-icons">menu</i>
                </span>
              </div>
            </div>
            <div class="chat-panel">
              <MessageIn />
              <MessageOut />
              <MessageIn />
              <MessageIn />
              <MessageOut />
              <div class="row">
                <div class="col-12">
                  <div class="chat-box-tray">
                    <i class="material-icons">sentiment_very_satisfied</i>
                    <input
                      type="text"
                      placeholder="Type your message here..."
                    />
                    <i class="material-icons">mic</i>
                    <i class="material-icons">send</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
