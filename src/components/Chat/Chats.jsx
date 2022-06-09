import React, { useState } from "react";
import "./Chats.scss";
import SingleChat from "./SingleChat";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Chats = (props) => {
  const { chats } = props;
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="chats-wrapper">
      {/* chats-header  */}
      <div className="chats-header">
        <div className="chats-header-left">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="chats-header-right">
          <i className="bi bi-filter-circle"></i>
          <i className="bi bi-chat-left-text-fill"></i>

          {/* dropdown without arrow */}

          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <i className="bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => navigate("/settings")}
              >
                Settings
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={handleLogOut}>
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* chats-search  */}
      <div className="chats-search">
        <div className="chats-search-wrapper">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      {/* chats-list  */}
      <div className="chats-list">
        {props.chats &&
          props.chats.map((chat) => (
            <SingleChat
              // name={chat.name}
              key={chat._id}
              chatId={chat._id}
              user={chat.members[1].username}
              text={chat.members[1].username}
              img={chat.members[1].avatar}
              getMessages={props.getMessages}
            />
          ))}
      </div>
    </div>
  );
};

export default Chats;
