import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="footer-container">
          <div class="footer_site-links" />
        </div>
        <div class="footer__credits">
          <div class="footer-container">
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
