import React, { Component } from "react";
import ContactDetails from "../ContactDetails/ContactDetails";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> {resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <ContactDetails resumeData={resumeData} />
              </div>
              <div className="columns download">
                <p>
                  <a href="cv/Bez_CV23.pdf" className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
