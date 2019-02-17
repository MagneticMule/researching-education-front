import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import Layout from '../components/layout';
// import PostIcons from "../components/PostIcons"

// import { rhythm } from "../utils/typography"

class PageTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage;
    return (
      <div>
        <h1>page.title</h1>
        <div>page.content</div>
      </div>
    );
  }
}
export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
