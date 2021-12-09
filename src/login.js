import React from "react";
import "./login.css";
import back from "./assets/test.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Redirect } from "react-router-dom";

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
      <div class="backimage">
        <form class="container">
          <h1>Login</h1>
          <div>
            Username:
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
          <div>
            Password:
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
          {/* </div> */}
          {/* </div> */}
          <button
            class="login"
            onClick={() => {
              axios
                .post("http://localhost:5000/login", {
                  username: this.state.username,
                  password: this.state.password,
                })
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                  if (res.data.found === false) {
                    alert(
                      "Username or password is incorrect or the user does not exist"
                    );
                  } else {
                    alert("Login Successful");
                    //return <Redirect to ="/home"></Redirect>
                    <Link to="/home"></Link>
                    // window.location("/home");</div>
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </button>
          <a href="/register"> Dont have an account? Register Now</a>
        </form>
      </div>
    );
  }
}
