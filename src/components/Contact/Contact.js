import React, { Component } from "react";

import ContactForm from "../ContactForm/ContactForm";
export default class Contact extends Component {
  render() {
    return (
      <section id='contact'>
        <div className='row section-head'>
          <div className='two columns header-col'>
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className='ten columns'>
            <h4>Get In Touch</h4>
            <p className='lead'>
              Don’t want to wait? Email me or call me now to have a chat.
            </p>
          </div>
        </div>
        <div className='row'>
          <ContactForm />
        </div>
      </section>
    );
  }
}
