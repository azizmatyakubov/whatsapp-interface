import React, { useCallback, useEffect } from "react";
import "./User.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveChatId, setActiveChat } from "../../slices/chat/chatSlice";

function User(props) {
  const dispatch = useDispatch();
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  const setActiveChatToRedux = (e) => {
    //console.log(props.chatId);
    dispatch(setActiveChatId(props.chatId));

    // if (document.querySelector(".active")) {
    //   document.querySelector(".active").classList.remove("active");
    // }

    // e.currentTarget.classList.add("active");
  };

  const getChat = useCallback(async () => {
    if (activeChatId) {
      try {
        const res = await fetch(
            `https://whatsapp-v1-api.herokuapp.com/chats/${activeChatId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
          data = await res.json();
        if (data) {
          dispatch(setActiveChat(data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch, activeChatId]);

  useEffect(() => {
    getChat();
  }, [getChat]);

  return (
    <>
      <div
        className={`list-main ${props.chatId === activeChatId ? "active" : ""}`}
        onClick={(e) => setActiveChatToRedux(e)}
      >
        <div className="col-2">
          <img
            className="User-img"
            src={require("../../Data/whatsapp-logo.png")}
            alt="placeholder"
          ></img>
        </div>
        <div className="coluser-border col-10">
          <div className="User-data1">
            <h5> {props.name} </h5>
            <p>8:50 pm</p>
          </div>
          <div className="User-data2">
            <p>{props.lastMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
