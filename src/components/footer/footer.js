import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SignupForm from './signupForm';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="container">
          <div class="footer__main">
            <div class="logo">
              <div class="footer__header">About Researching Education</div>
              <div className="footer__seperator" />
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </div>
            </div>
            <div class="footer_site-links">
              <div class="footer__header">Links</div>
              <div className="footer__seperator" />
            </div>
            <SignupForm />

            <div>Test</div>
          </div>
        </div>
        <div class="footer__credits">
          <div class="container">
            <span class="footer__copyright">
              © {new Date().getFullYear()}, Researching Education
              {` `}
            </span>
            Created by <a href="magneticmule.com">The Magnetic Mule Co.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
