import React from "react";
import "./land.css";
import back from "./assets/test.jpg";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teststate: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
