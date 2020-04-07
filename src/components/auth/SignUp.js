import React, { Component } from "react";
import firebase from "../../config/fbConfig";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // stop automatic submit
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Sign Up </h5>

          <div className="row">
            <div className="col l6 s6 m6">
              <div className="col l12 s12 m12">
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
              </div>
              <div className="col l12 s12 m12">
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col l12 s12 m12">
                <div className="input-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col l12 s12 m12">
                <div className="input-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col l12 s12 m12">
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="col l6 s6 m6">
              <section className="signupImg">
                <div className=" notification center">
                  <h4 className="center">
                    Driving over 100k in sales with a Shopify Rewards campaign
                    from KickoffLabs
                  </h4>
                  <p className="fontpt">
                    We just launched our new integration to boost sales on
                    Shopify!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
