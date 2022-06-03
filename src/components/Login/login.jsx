import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./login.css";

class Login extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <div className="main-container">
            <div className="login1">
              <Form className="text-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Number" />
                </Form.Group>

                <Form.Group className=" mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
}

export default Login;
