import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = props => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <p dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }} />
  </Layout>
);

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    wordpressPage(slug: { eq: "home-page" }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
