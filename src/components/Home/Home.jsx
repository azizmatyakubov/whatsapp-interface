import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Chats from "../Chat/Chats";
import Message from "../Message/Message";
import "./Home.scss";

const Home = () => {
  const [chats, setChats] = useState();
  const [messages, setMessages] = useState();

  //const chatId = useSelector((state) => state.chat.activeChatId);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const response = await fetch(
        "https://whatsapp-v1-api.herokuapp.com/chats",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMessages = async (chatId) => {
    try {
      const response = await fetch(
        `https://whatsapp-v1-api.herokuapp.com/chats/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-wrapper">
      <Chats chats={chats} getMessages={getMessages} />
      <Message messages={messages} />
    </div>
  );
};

export default Home;
