import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SubscribeForm from '../components/subscribeForm';
import SEO from '../components/seo';

const handleSubmit = e => {};
const handleChange = e => {};

const SubscribePage = props => (
  <Layout>
    <SEO
      title="Subscribe to get the latest issue of Researching Education"
      keywords={[
        `research`,
        `teaching`,
        `learning`,
        'teach',
        'learn',
        'magazine',
      ]}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
    <SubscribeForm />
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
