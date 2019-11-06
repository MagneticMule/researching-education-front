import React, { Component } from 'react';
import Link from 'gatsby-link';

class MainMenu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list--item">
            <Link to="/articles" className="menu__list--item-link">
              Articles
            </Link>
          </li>
          <li className="menu__list--item">
            <Link to="/subscribe" className="menu__list--item-link">
              Subscribe
            </Link>
            <div className="menu__list--item-seperator" />
          </li>
          <li className="menu__list--item">
            <Link to="/privacy" className="menu__list--item-link">
              Privacy
            </Link>
            <div className="menu__list--item-seperator" />
          </li>
          <li className="menu__list--item">
            <Link to="/about" className="menu__list--item-link">
              About
            </Link>
            <div className="menu__list--item-seperator" />
          </li>
        </ul>
      </nav>
    );
  }
}
export default MainMenu;
