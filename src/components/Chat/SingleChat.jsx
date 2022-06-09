import React, { useState } from "react";
import "./Chats.scss";
import { setActiveChatId } from "../../slices/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleChat = ({ chatId, name, user, text, img, getMessages }) => {
  // REDUX
  const dispatch = useDispatch();
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  const setActiveChatToRedux = (e) => {
    dispatch(setActiveChatId(chatId));
    getMessages(activeChatId);

    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  return (
    <div
      className="singleChat-wrapper"
      onClick={(e) => setActiveChatToRedux(e)}
    >
      <div className="singleChat-image">
        <img src={img} alt="user" />
      </div>
      <div className="singleChat-name">
        <h4>{name}</h4>
        <p>{`${user}: ${text}`}</p>
      </div>
    </div>
  );
};

export default SingleChat;
