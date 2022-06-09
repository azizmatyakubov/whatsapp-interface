import React from "react";
import "./Message.scss";
import SingleMessage from "./SingleMessage";

const Message = ({ messages }) => {
  return (
    <div className="message-wrapper">
      {/* header  */}
      <div className="message-header">
        {/* left  */}
        <div className="message-header-left">
          <img src="https://via.placeholder.com/50" alt="avatar" />
        </div>

        {/* center  */}
        <div className="message-header-center">
          <h4>Group 1</h4>
          <p>user1, user2, user3</p>
        </div>

        {/* right  */}
        <div className="message-header-right">
          <i className="bi bi-search"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      {/* body */}
      <div className="message-body">
        {messages &&
          messages.map((message) => (
            <SingleMessage
              key={message._id}
              text={message.text}
              user={message.userId}
            />
          ))}
      </div>

      {/* footer */}
      <div className="message-footer">
        <i className="bi bi-emoji-smile"></i>
        <i className="bi bi-paperclip"></i>
        <input type="text" placeholder="Type a message" />
        <i className="bi bi-mic-fill"></i>
      </div>
    </div>
  );
};

export default Message;
