import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteSubtitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'EB Garamond',
            fontStyle: 'normal',
            fontWeight: '800',
            lineHeight: 'normal',
            fontSize: '2.1rem',
            letterSpacing: '-0.04em',
            color: `#861E1E`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          margin: '10px 0',
          fontFamily: 'EB Garamond',
          fontSize: '.9rem',
        }}
      >
        {siteSubtitle}
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubttitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: '',
}

export default Header
