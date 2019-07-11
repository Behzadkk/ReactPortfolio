import React, { Component } from "react";
export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className={`bar-expand p${item.knowledge}`} />
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
