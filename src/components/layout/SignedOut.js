import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup" className="textClass">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="textClass">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
