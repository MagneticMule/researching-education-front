import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <div className="footer__signup-form">
        <div className="footer__signup-form--intro">
          Researching Education sends occasional lists of articles like this to
          email subscribers. If you wish to subscribe all we need is your email
          address.
        </div>
        <div className="footer__signup-form--controls">
          <input
            type="email"
            name="reader_email"
            className="footer__signup-form--email-input"
            placeholder="you@your-email.com"
          />
          <button type="submit" className="footer__signup-form--submit-btn">
            Sign me up
          </button>
        </div>
      </div>
    );
  }
}

export default SignupForm;
