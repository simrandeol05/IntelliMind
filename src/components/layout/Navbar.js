import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedLink";
import SignedOutLinks from "./SignedOut";
import { connect } from "react-redux";
import DropDown from "./Dropdown";

const Navbar = (props) => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navbar-fixed NavClass">
      <div className="container">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">
              <h5 className="textClass">
                <strong>IntelliMind</strong>
              </h5>
            </Link>
          </li>
          <li>
            <Link to="/" className="textClass">
              Why IntelliMind
            </Link>
          </li>
          <li>
            <DropDown />
          </li>
          <li>
            <Link to="/pricing" className="textClass">
              Pricing
            </Link>
          </li>
        </ul>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
