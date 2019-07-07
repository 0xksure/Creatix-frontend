import React from "react";
import LoginModal from "./modals/login";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  displayModal() {
    console.log("hello");
    this.setState({
      modalIsOpen: true
    });
  }

  render() {
    return (
      <div className="cell auto login">
        <div className="login-button" onClick={() => this.displayModal()}>
          Log in
        </div>
        {this.state.modalIsOpen && <LoginModal modalIsOpen={true} />}
      </div>
    );
  }
}

export default Login;
