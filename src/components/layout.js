import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from './head';
import MainMenu from './menu/mainMenu';
import Header from './header';
import Footer from './footer/footer';
import './sass/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={data => (
      <div>
        <Head />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteSubtitle={data.site.siteMetadata.subTitle}
        />
        <div className="container">{children}</div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
