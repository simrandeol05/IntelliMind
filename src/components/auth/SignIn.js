import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import Dashboard from "../dashboard/Dashboard";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // stop automatic submit
    this.props.signIn(this.state);
    this.setState({ redirect: true });
  };
  render() {
    const { authError } = this.props;
    if (!this.state.redirect) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3"> Sign In </h5>
            <div className="row">
              <div className="col l6 s6 m6">
                <div className="col l12 s12 m12">
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
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
                    <button className="btn pink lighten-1 z-depth-0">
                      Login
                    </button>
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l6 s6 m6">
                <section className="signInImg">
                  <div className=" notification center">
                    <h4 className="center">
                      Are you building a business that supports your life plan?
                    </h4>
                    <p className="fontpt">Learn how IntelliMind got started.</p>
                  </div>
                </section>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
