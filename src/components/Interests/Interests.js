import React, { Component } from "react";
export default class Interests extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {resumeData.portfolio &&
          resumeData.portfolio.map((item, i) => {
            return (
              <div key={i} className="columns portfolio-item">
                <div className="item-wrap">
                  <a href={`#${item.name}`}>
                    <img
                      src={`${item.imgurl}`}
                      className="item-img"
                      alt="interests"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
