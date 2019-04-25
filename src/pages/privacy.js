import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const PrivacyPage = props => (
  <Layout>
    <SEO
      title="Privacy"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </Layout>
);

export default PrivacyPage;

export const privacyPageQuery = graphql`
  query privacyPageQuery {
    wordpressPage(slug: { eq: "privacy" }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
