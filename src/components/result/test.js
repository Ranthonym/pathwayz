import React, { Component } from "react";
import MessageIn from "./messageIncoming";
import MessageOut from "./messageSent";
import MessageList from "./messageList";
import image from "../../";

// const top5Careers = ["career1", "career2", "career3", "career4", "career5"];
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  Button,
  CardTitle,
} from "shards-react";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convoID: 1,
      senderName: "Rahul",
      senderImage:
        "https://avatars3.githubusercontent.com/u/50722244?s=460&u=1f7dfa9d8cd14a3befb3ab5f7304b9aa9159eba3&v=4",
    };
    this.onConversation1Click = this.onConversation1Click.bind(this);
    this.onConversation2Click = this.onConversation2Click.bind(this);
  }

  onConversation1Click() {
    this.setState({
      convoID: 1,
      senderName: "Rahul",
      senderImage:
        "https://avatars3.githubusercontent.com/u/50722244?s=460&u=1f7dfa9d8cd14a3befb3ab5f7304b9aa9159eba3&v=4",
    });
  }

  onConversation2Click() {
    this.setState({
      convoID: 2,
      senderName: "Raho",
      senderImage:
        "https://avatars3.githubusercontent.com/u/53961799?s=460&u=008ac14516a347a79623b8b8b115980d2e267c09&v=4",
    });
  }

  render() {
    return (
      <Card id="message-box">
        <CardHeader> My Messages </CardHeader>
        <CardBody id="message-body">
          <div class="row no-gutters">
            <div class="col-md-4 border-right">
              <div class="settings-tray">
                <img
                  class="profile-image"
                  src="https://avatars1.githubusercontent.com/u/43259449?s=460&v=4"
                  alt="Profile img"
                />
                <span class="settings-tray--right">
                  <i class="material-icons">cached</i>
                  <i class="material-icons">message</i>
                  <i class="material-icons"> menu</i>
                </span>
              </div>

              {/* <div class="search-box">
              <div class="input-wrapper">
                <i class="material-icons">search</i>
                <input placeholder="Search here" type="text" />
              </div>
            </div> */}
              <div
                onClick={this.onConversation1Click}
                class="friend-drawer friend-drawer--onhover"
              >
                <img
                  class="profile-image"
                  src="https://avatars3.githubusercontent.com/u/50722244?s=460&u=1f7dfa9d8cd14a3befb3ab5f7304b9aa9159eba3&v=4"
                  alt=""
                />
                <div class="text">
                  <h6>Rahul</h6>
                  <p class="text-muted">Software Developer</p>
                </div>
              </div>
              <div
                onClick={this.onConversation2Click}
                class="friend-drawer friend-drawer--onhover"
              >
                <img
                  class="profile-image"
                  src="https://avatars3.githubusercontent.com/u/53961799?s=460&u=008ac14516a347a79623b8b8b115980d2e267c09&v=4"
                  alt=""
                />
                <div class="text">
                  <h6>Raho</h6>
                  <p class="text-muted">Software Developer</p>
                </div>
              </div>
              <hr />
            </div>

            <div class="col-md-8">
              <div class="settings-tray">
                <div class="friend-drawer no-gutters friend-drawer--grey">
                  <img
                    class="profile-image"
                    src={this.state.senderImage}
                    alt=""
                  />
                  <div class="text">
                    <h6>{this.state.senderName}</h6>
                    <p class="text-muted">Software Developer</p>
                  </div>
                  <span class="settings-tray--right"></span>
                </div>
              </div>

              <div class="chat-panel">
                <MessageList id={this.state.convoID} />
                {/* <div class="row">
                  <div id="send-box" class="col-12">
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
                </div> */}
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
    );
  }
}
