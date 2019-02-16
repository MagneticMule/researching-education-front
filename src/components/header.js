import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MainMenu from './menu/mainMenu';

const Header = ({ siteTitle, siteSubtitle }) => (
  <div className="site-mast">
    <div class="header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Oswald',
            textTransform: 'uppercase',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            fontSize: '2rem',
            letterSpacing: '-0.04em',
            color: `#861E1E`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <MainMenu />
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubttitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: '',
};

export default Header;
