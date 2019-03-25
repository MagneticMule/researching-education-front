import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SignupForm from './signupForm';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            <div class="footer__section">
              <div className="footer__header">Sign up</div>
              <SignupForm />
            </div>
            <div className="footer__section">
              <div className="footer__header">About Researching Education</div>
              <div className="footer__paragraph">
                <span class="fs-italic">Researching Education</span> attempts to
                present clear, accessable summaries of recent research projects
                in and around educational practice. Subscription is open to all
                but will most likely to appeal to practicing teachers.
                Subscribers receive periodic emails listing topic headlines that
                link to the authors’ article summaries.
              </div>
            </div>
            <div class="footer__section">
              <div className="footer_site-links">
                <div className="footer__header">Links</div>
                <nav className="footer__nav">
                  <ul class="footer__nav-list">
                    <li>Articles</li>
                    <li>Privacy</li>
                    <li>Contribute</li>
                    <li>About</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__credits">
          <div className="footer__container">
            <span className="footer__copyright">
              © {new Date().getFullYear()},{' '}
              <span className="">Researching Education.</span>
              {` `}
            </span>
            Created with ❤ by{' '}
            <a
              href="https://magneticmule.com"
              className="footer__credits-copyright--link"
            >
              The Magnetic Mule Co
            </a>
            .
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
