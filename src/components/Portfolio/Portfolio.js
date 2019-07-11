import React, { Component } from "react";

import Interests from "../Interests/Interests";
import PortfolioModal from "../PortfoModal/PortfoModal";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="interests">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <Interests resumeData={resumeData} />
          </div>
          <PortfolioModal resumeData={resumeData} />
        </div>
      </section>
    );
  }
}
