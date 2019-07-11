import React, { Component } from "react";
export default class WorkExperience extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item, i) => {
              return (
                <div key={i} className="row item">
                  <div className="twelve columns">
                    <h3>{item.specialization}</h3>
                    <p className="info">
                      {item.CompanyName}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.since} - {item.to}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
