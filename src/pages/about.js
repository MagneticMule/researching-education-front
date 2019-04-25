import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const AboutPage = props => (
  <Layout>
    <SEO
      title="About"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
  </Layout>
);

export default AboutPage;

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    wordpressPage(slug: { eq: "about" }) {
      status
      title
      content
      wordpress_id
    }
  }
`;
