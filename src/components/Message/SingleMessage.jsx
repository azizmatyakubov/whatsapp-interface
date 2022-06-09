import React from "react";

const SingleMessage = ({ user, text }) => {
  return (
    <div className="singleMessage-wrapper">
      <div className="singleMessage-header">{user}</div>
      <div className="singleMessage-body">{text}</div>
    </div>
  );
};

export default SingleMessage;
