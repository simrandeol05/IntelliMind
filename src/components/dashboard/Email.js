import React, { Component } from "react";
import "../../style.css";
import Modal from "./Modal";

class Email extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div className="fixed-action-btn">
        <Modal />
      </div>
    );
  }
}

export default Email;
