import React, { Component } from "react";
import { connect } from "react-redux";
import SampleData from "../layout/sampleData";

class Dashboard extends Component {
  render() {

    return (

        <div className="dashboard container center">
        <h3 className="textClass purple-text text-darken-4">How to Setup a Viral Waiting List Launch Page Like Robinhood with KickoffLabs</h3>


        <section className = "headingSection full-width"></section>

          <div className="row">
          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center textClass pink-text text-darken-3">The Signup Landing Page</h4>
              <h5 className="center">Strategy</h5>
              <SampleData />
              </div>
          </div>

          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center textClass pink-text text-darken-3">The Waiting List Thank You Page</h4>
              <h5 className="center">Semi Annual</h5>
              <SampleData />
            </div>
          </div>

          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center textClass pink-text text-darken-3">The Emails</h4>
              <h5 className="center">Monthly</h5>
              <SampleData />
            </div>
          </div>

        </div>

    </div>
    );
  }
}


export default Dashboard;
