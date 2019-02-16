<<<<<<< HEAD
import React, { Component } from 'react';
import Link from 'gatsby-link';

class MainMenu extends Component {
  render() {
    return (
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list--item">
            <Link to="/articles" className="menu__list--item-link">
              Articles
            </Link>
          </li>
          <li class="menu__list--item">
            <Link to="/subscribe" className="menu__list--item-link">
              Subscribe
            </Link>
            <div class="menu__list--item-seperator" />
          </li>
          <li class="menu__list--item">
            <Link to="/privacy" className="menu__list--item-link">
              Privacy
            </Link>
            <div class="menu__list--item-seperator" />
          </li>
          <li class="menu__list--item">
            <Link to="/about" className="menu__list--item-link">
              About
            </Link>
            <div class="menu__list--item-seperator" />
          </li>
        </ul>
      </nav>
    );
  }
}
export default MainMenu;
=======
import React, { Component } from 'react';
import Link from 'gatsby-link';

class MainMenu extends Component {
  render() {
    return <div>

    </div>;
  }
}
export default MainMenu;
>>>>>>> origin/enterprise
