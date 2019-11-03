import React, { Component } from "react";
import SocialMedia from "../SocialMediaLinks/SocialMediaLinks";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <SocialMedia resumeData={resumeData} />
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open' />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
