import React from "react";
import { Container, Form, Button } from "react-bootstrap";
class Login extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="main-container">
            <div className="login">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Login;
