import React from "react";

// const top5Careers = ["career1", "career2", "career3", "career4", "career5"];

export default function MessageIn(props) {
  return (
    <div class="row no-gutters">
      <div id="chatbox-right" class="col-md-3 offset-md-9">
        <div class="chat-bubble chat-bubble--right">{props.content}</div>
      </div>
    </div>
  );
}
