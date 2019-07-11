import React, { Component } from "react";
export default class TopNav extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#a" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          {resumeData.sections &&
            resumeData.sections.map((item, i) => {
              return (
                <li key={i}>
                  <a className="smoothscroll" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}
