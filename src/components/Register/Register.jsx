import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container, Form } from "react-bootstrap";
import "../../components/Register/Register.css";

class Register extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <div className="main-container">
            <div className="login">
              <div className="container">
                <div className="row">
                  <Form className="formDir  text-center">
                    <div
                      id="imageContainer"
                      className="col-md-6 mx-auto text-center"
                    >
                      <label for="Bfile">
                        <div className="addImage">
                          <img
                            src={require("../../Data/plusM.jpg")}
                            alt="add Images"
                            className="plus"
                          />
                        </div>
                      </label>
                      <input id="Bfile" type="file" />
                    </div>
                    <div className="col-md-6 mx-auto  ">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Number" />
                      </Form.Group>

                      <Form.Group
                        className=" mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>

                      <button className="LoginButton" type="submit">
                        Register
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Register;
