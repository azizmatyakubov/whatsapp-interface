import ChatBackground from "./ChatBackground.jsx"
import { Dropdown } from "react-bootstrap"
import { useState } from "react"

import "./ChatBox.css"

const Chat = () => {
  const [newChat, setNewChat] = useState(false)

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
              <div className="Lborder col-6">
                <svg className="icons1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
                </svg>

                <svg className="icons2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => setNewChat(!newChat)}>
                  <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
                </svg>

                <Dropdown>
                  <Dropdown.Toggle variant="transparent">
                    <svg className="icons3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M9.375 329.4c12.51-12.51 32.76-12.49 45.25 0L128 402.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C-3.125 362.1-3.125 341.9 9.375 329.4z" />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">New group</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Starred messages</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
  )
}

export default Chat
