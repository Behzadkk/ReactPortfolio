import React, { Component } from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import Educations from "../Educations/Educations";
import CallAction from "../CallAction/CallAction";
import Skills from "../Skills/Skills";
import Courses from "../Courses/Courses";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <WorkExperience resumeData={resumeData} />
        <CallAction />
        <Educations resumeData={resumeData} />
        <Courses resumeData={resumeData} />
        <CallAction />
        <Skills resumeData={resumeData} />
      </section>
    );
  }
}
