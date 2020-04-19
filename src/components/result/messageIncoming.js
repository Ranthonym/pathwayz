import React, { Component } from "react";

// const top5Careers = ["career1", "career2", "career3", "career4", "career5"];

export default function MessageOut(props) {
  return (
    <div class="row no-gutters">
      <div class="col-md-3">
        <div class="chat-bubble chat-bubble--left">{props.content}</div>
      </div>
    </div>
  );
}
