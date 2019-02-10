import React, { Component } from 'react';
import Link from 'gatsby-link';

class MainMenu extends Component {
  render() {
    return (
      <div class="menu">
        <Link to="/articles" className="menu__item">
          Articles
        </Link>
        <Link to="/subscribe" className="menu__item">
          Subscribe
        </Link>
        <Link to="/privacy" className="menu__item">
          Privacy
        </Link>
        <Link to="/about" className="menu__item">
          About
        </Link>
      </div>
    );
  }
}
export default MainMenu;
