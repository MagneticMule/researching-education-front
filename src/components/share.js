import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  EmailIcon,
} from 'react-share';

import './sass/main.scss';

const Share = () => (
  <div class="post__sharing">
    <div class="post__sharing--button">
      <div class="post__sharing--button--icon">
        <EmailIcon size={32} round={true} />
      </div>
    </div>
    <div class="post__sharing--button--icon">
      <TwitterIcon size={32} round={true} />
    </div>
    <div class="post__sharing--button--icon">
      <FacebookIcon size={32} round={true} />
    </div>
    <div class="post__sharing--button--icon">
      <LinkedinIcon size={32} round={true} />
    </div>
    <div class="post__sharing--button--icon">
      <PinterestIcon size={32} round={true} />
    </div>
  </div>
);

export default Share;
