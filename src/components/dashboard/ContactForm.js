import React, { Component } from "react";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeEmail = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  handleChangeMessage = (e) => {
    e.preventDefault();
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_d0zUbqCJ";
    var service_id = "default_service";
    var user_id = "user_Pmhqlf6uxbomYdL4RdOpC";

    this.sendFeedback(
      service_id,
      templateId,
      {
        reply_to: this.state.email,
        from_name: this.state.name,
        message_html: this.state.message,
      },
      user_id
    );
  };

  sendFeedback(service_id, templateId, variables, user_id) {
    emailjs
      .send(service_id, templateId, variables, user_id)
      .then((res) => {
        console.log("Email successfully sent!", res);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChangeName}
                  value={this.state.name}
                  name="name"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="text"
                  className="validate"
                  onChange={this.handleChangeEmail}
                  value={this.state.email}
                  name="email"
                />
                <label htmlFor="Email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="message"
                  type="text"
                  className="validate"
                  onChange={this.handleChangeMessage}
                  value={this.state.message}
                  name="message"
                />
                <label htmlFor="Message">Message</label>
              </div>
              <div className="input-field col s12 right">
                <button
                  className="btn waves-effect waves-light pink darken-3"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
