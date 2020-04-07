import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
