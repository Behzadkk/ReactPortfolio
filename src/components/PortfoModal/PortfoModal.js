import React, { Component } from "react";
export default class PortfoModal extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {resumeData.portfolio &&
          resumeData.portfolio.map((item, i) => {
            return (
              <div key={i} id={item.name} className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src={`${item.imgurl}`}
                  alt={item.name}
                />
                <div className="description-box">
                  <h4>{item.title}</h4>
                  <p>{item.details}</p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    {item.category.join(", ")}
                  </span>
                </div>
                <div className="link-box">
                  <a
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}
