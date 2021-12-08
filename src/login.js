import React from "react";
import "./login.css";
import back from "./assets/test.jpg";
import { Link } from "react-router-dom";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.usernameref = React.createRef();
    this.passwordref = React.createRef();
  }
  render() {
    return (
      <div class="back">
        <form>
          <div class="flexcenter">
            <div>
              Username :
              <input
                type="text"
                placeholder="Username"
                ref={this.usernameref}
                onChange={() => {
                  this.setState({ username: this.usernameref.current.value });
                  console.log(this.state.username);
                }}
              />
            </div>
            <br />
            <div>
              Password :
              <input
                type="password"
                placeholder="Password"
                ref={this.passwordref}
                onChange={() => {
                  this.setState({ password: this.passwordref.current.value });
                  console.log(this.state.password);
                }}
              />
            </div>
          </div>
        </form>
        <Link to="/test">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}
