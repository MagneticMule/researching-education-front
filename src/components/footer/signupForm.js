import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <div class="footer__signup-form">
        <div className="footer__signup-form--intro">
          Lorem ipsum dolor sit amet, has ea assum aperiam, vis in habemus
          sententiae, ei illum verterem sea. Alia detracto in vis. At qui case
          eleifend, qui ex diceret civibus, et cum velit aliquam
          mnesarchum.Lorem ipsum dolor sit amet.
        </div>
        <div className="box-shadow-small">
          <input
            type="email"
            name="reader_email"
            class="footer__signup-form--email-input"
            placeholder="you@your-email.com"
          />
          <button type="submit" class="footer__signup-form--submit-btn">
            Sign me up
          </button>
        </div>
      </div>
    );
  }
}

export default SignupForm;
