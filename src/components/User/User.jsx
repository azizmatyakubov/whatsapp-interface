import React from "react";
import "./User.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  render() {
    return (
      <>
        <div
          className="list-main"
          onClick={() => this.setState({ isClicked: true })}
        >
          <div className="col-2">
            <img
              className="User-img"
              src={require("../../Data/whatsapp-logo.png")}
              alt="placeholder"
            ></img>
          </div>
          <div id="user-border" className="col-10">
            <div className="User-data1">
              <h5>Gioacco</h5>
              <p>8:50 pm</p>
            </div>
            <div className="User-data2">
              <p>I'll meet you there</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
