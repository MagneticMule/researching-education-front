import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const SubscribePage = props => (
  <Layout>
    <SEO
      title="Subscribe"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </Layout>
);

export default SubscribePage;

export const abousubscribePageQuery = graphql`
  query subscribePageQuery {
    wordpressPage(slug: { eq: "subscribe" }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
