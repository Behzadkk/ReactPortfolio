import React, { Component } from "react";
export default class ContactDetails extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <p className="address">
          <span>{resumeData.name}</span>
          <br />
          <span>{resumeData.address}</span>
          <br />
          <span>{resumeData.email}</span>
          <br />
          <span>{resumeData.phone}</span>
        </p>
      </React.Fragment>
    );
  }
}
