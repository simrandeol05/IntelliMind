import React from "react";
import SampleData from "./sampleData";

const Pricing = () => {
  return (
    <div className="container">
      <h4 className="center textClass">
        Start growing your business with a viral boost today!
      </h4>
      <div className="section">
        <div className="row">
          <div className="col s4 m4">
            <h5 className="header center pink-text text-darken-3 textClass">
              Pay Monthly
            </h5>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <SampleData />
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <h5 className="header center pink-text text-darken-3 textClass">
              Pay Quaterly
            </h5>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <SampleData />
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s4 m4">
            <h5 className="header center pink-text text-darken-3 textClass">
              Pay Yearly
            </h5>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <SampleData />
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center pink-text text-darken-3 textClass">
                Pay Yearly
              </h4>
              <h5 className="center">Pay Yearly</h5>
              <SampleData />
            </div>
          </div>

          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center pink-text text-darken-3 textClass">
                Semi Annual
              </h4>
              <h5 className="center">Semi Annual</h5>
              <SampleData />
            </div>
          </div>

          <div className="col s12 m12">
            <div className="icon-block">
              <h4 className="center pink-text text-darken-3 textClass">
                Monthly
              </h4>
              <h5 className="center">Monthly</h5>
              <SampleData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
