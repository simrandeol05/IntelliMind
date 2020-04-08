import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Dropdown, Button } from "react-materialize";

class DropDown extends Component {
  render() {
    return (
      <Dropdown
        id="Dropdown_6"
        className="dropdownMenu"
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: true,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <Button
            node="button"
            className="white boxShadow grey-text text-darken-3"
          >
            What you can do
          </Button>
        }
      >
        <div className="container dropdownMenu">
          <ul>
            <li>
              <a href="/" className="grey-text text-darken-3">
                How it works
              </a>
            </li>
            <li>
              <a
                href="https://app.kickofflabs.com/landing-page-templates"
                className="grey-text text-darken-3"
              >
                Landing pages
              </a>
            </li>
            <li>
              <a
                href="https://kickofflabs.com/features/email-optin-forms/"
                className="grey-text text-darken-3"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="https://kickofflabs.com/features/anyform/"
                className="grey-text text-darken-3"
              >
                Anyform
              </a>
            </li>
            <li>
              <a
                href="https://kickofflabs.com/features/campaign-types/"
                className="grey-text text-darken-3"
              >
                Campaign Types
              </a>
            </li>
          </ul>
        </div>
      </Dropdown>
    );
  }
}

export default DropDown;
