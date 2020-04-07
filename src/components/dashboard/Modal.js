import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../../style.css";
import ContactForm from "./ContactForm";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {
    const options = {
      //   onOpenStart: () => {
      //     console.log("Open Start");
      //   },
      //   onOpenEnd: () => {
      //     console.log("Open End");
      //   },
      //   onCloseStart: () => {
      //     console.log("Close Start");
      //   },
      //   onCloseEnd: () => {
      //     console.log("Close End");
      //   },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger pink darken-3"
          data-target="modal1"
        >
          Contact Us
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h5 className="center-align">Give you creds and we'll get back</h5>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
