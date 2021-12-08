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
      <div class="backimage">
        <div class="card1">
          <p class="head">Fitness App</p>
          <Link to="/login">
            <button class="getstarted">Let's Get started!</button>
          </Link>
        </div>
      </div>
    );
  }
}
