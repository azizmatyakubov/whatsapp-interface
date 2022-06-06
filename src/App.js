import React from "react"
import Login from "./components/Login/login.jsx"
import Register from "./components/Register/Register.jsx"
import NotFound from "./components/Not_Found/Not_Found.jsx"
import ChatBox from "./components/Chat/ChatBox.jsx"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Chat" element={<ChatBox />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
