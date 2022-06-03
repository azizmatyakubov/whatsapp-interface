import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from "react-bootstrap";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <div className="main-container">
            <img
              src={require("../../Data/404-error.jpg")}
              alt="Not Found img"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default NotFound;
