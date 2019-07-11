import React, { Component } from "react";
export default class SocialMedia extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <ul className="social social-links">
        {resumeData.socialLinks &&
          resumeData.socialLinks.map(item => {
            return (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={item.className} />
                </a>
              </li>
            );
          })}
      </ul>
    );
  }
}
