import React, { useState, useEffect } from "react";
import MessageIn from "./messageIncoming";
import MessageOut from "./messageSent";
import PropTypes from "prop-types";

export default function MessageList(props) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    getMessage();
  }, [message]);

  function getMessage() {
    fetch("http://localhost:3001/messages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }

  const allMessages = message.map((message) => {
    if (message.conversation_id === props.id) {
      if (message.user_id === 1) {
        return (
          <MessageIn
            key={message.id}
            id={message.id}
            content={message.message}
          />
        );
      } else {
        return (
          <MessageOut
            key={message.id}
            id={message.id}
            content={message.message}
          />
        );
      }
    }
  });
  return <div>{allMessages}</div>;
}

MessageIn.propTypes = {
  content: PropTypes.string,
};

MessageOut.propTypes = {
  content: PropTypes.string,
};
