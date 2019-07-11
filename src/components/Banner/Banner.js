import React, { Component } from "react";
import SocialMedia from "../SocialMediaLinks/SocialMediaLinks";
export default class Banner extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
          <h3>
            I am a {resumeData.role}. {resumeData.roleDescription} Let's{" "}
            <a className="smoothscroll" href="#about">
              start scrolling
            </a>{" "}
            and learn more{" "}
            <a className="smoothscroll" href="#about">
              about me
            </a>
            .
          </h3>
          <hr />
          <SocialMedia resumeData={this.props.resumeData} />
        </div>
      </div>
    );
  }
}
