import React, { Component } from "react";

import TopNav from "../TopNav/TopNav";
import Banner from "../Banner/Banner";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <TopNav resumeData={resumeData} />
        <Banner resumeData={resumeData} />
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
