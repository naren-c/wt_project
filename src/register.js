import React from "react";
import "./login.css";
import back from "./assets/test.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone: "",
    };
    this.usernameref = React.createRef();
    this.passwordref = React.createRef();
    this.emailref = React.createRef();
    this.phoneref = React.createRef();
  }

  render() {
    return (
      <div class="back">
        <h1>Register</h1>
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
            <div>
              Email :
              <input
                type="email"
                placeholder="Email"
                ref={this.emailref}
                onChange={() => {
                  this.setState({ email: this.emailref.current.value });
                }}
              />
            </div>
            <div>
              Phone no :
              <input
                type="telephone"
                placeholder="Phone No."
                ref={this.phoneref}
                onChange={() => {
                  this.setState({ phone: this.phoneref.current.value });
                }}
              />
            </div>
          </div>
        </form>
        <Link to="/login">
          <button
            onClick={() => {
              axios
                .post("http://localhost:5000/register", {
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email,
                  phno: this.state.phone,
                })
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                  if (res.data.inserted === false)
                    alert("Username already exists");
                  else alert("Register Successful");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Register
          </button>
        </Link>
      </div>
    );
  }
}
