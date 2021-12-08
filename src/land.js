import React from "react";
import "./land.css";
import back from "./assets/test.jpg";
import { Link } from "react-router-dom";
export default class Land extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teststate: 0,
    };
  }
  render() {
    return (
      <div class="back">
        <img class="card-img-top w-100 d-block" src={back} class="backimage" />
        <Link to="/login">
          <button>Click me</button>
        </Link>
      </div>
    );
  }
}

