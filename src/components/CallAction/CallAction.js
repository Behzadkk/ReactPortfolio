import React, { Component } from "react";
export default class CallAction extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="call-to-action">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Work Together.</span>
              </h1>
            </div>
            <div className="seven columns">
              <h2>
                <a href="#contact">Looking For A Software Engineer?</a>
              </h2>
              <p>
                If you are looking for a Software Engineer, experienced in
                <span> Node.js </span>,
                <span> React.js </span> and
                <span> MongoDB </span>
                please get in touch.
              </p>
            </div>
            <div className="three columns action">
              <a href="#contact" className="button">
                Contact Now
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
