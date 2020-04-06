import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedLink";
import SignedOutLinks from "./SignedOut";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper NavClass">
        <div className="container">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li onClick={() => this.openDropDown}>
              <Link to="/">
                <h5>
                  <strong>IntelliMind</strong>
                </h5>
              </Link>
            </li>
            <li>
              <Link to="/">Why IntelliMind</Link>
            </li>
            <li>
              <Link to="/">What You Can Do</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
