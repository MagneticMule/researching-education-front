import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const ArticlesPage = props => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </Layout>
);

export default ArticlesPage;

export const articlePageQuery = graphql`
  query articlePageQuery {
    wordpressPage(slug: { eq: "articles" }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
