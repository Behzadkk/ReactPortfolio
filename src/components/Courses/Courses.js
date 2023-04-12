import React, { Component } from "react";
export default class Courses extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Certificates</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.courses &&
            resumeData.courses.map((item, i) => {
              return (
                <div key={i} className="row item">
                  <div className="twelve columns">
                    <h3>{item.CourseName}</h3>
                    <p className="info">
                      {item.Issuer}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <ul>{item.Achievements.map(a => <li>{a}</li>)}</ul>
                    {/* <p>{item.Achievements}</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
