import React from "react";
import { useState ,FormEvent} from "react";

import { Container, Form } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./login.css";

function Login() {
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    let body = {
      email: telephone,
      password: password,
    };
    const response = await fetch(
      "https://whatsapp-v1-api.herokuapp.com/users/session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      window.location.href = "/chat";

      console.log(data);
      localStorage.setItem("token", data.accessToken);
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <div id="main-container">
          <div className="login1">
            <Form className="text-center" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Number"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className=" mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>

              <button className="LoginButton" type="submit">
                Login
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
