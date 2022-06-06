import React from "react";
import ChatBackground from "./ChatBackground.jsx";
import { Container, Row } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import "./ChatBox.css";

class Chat extends React.Component {
  render() {
    return (
      <>
        <ChatBackground />
        <div className="main-container">
          <div className="data-column">
            <div className="user">
              <div className="first-tab">
                <div className="col-6">
                  <img id="Pimg" src="" alt="Pimg" />
                </div>
                <div className="col-6">
                  <FontAwesomeIcon icon="fa-solid fa-arrows-spin" />
                  <svg></svg>
                  <svg></svg>
                </div>
              </div>
            </div>
            <div className="search"></div>
            <div className="list"></div>
          </div>
          <div className="chat-column">
            <div className="chat-header"></div>
            <div className="chat-body"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Chat;
