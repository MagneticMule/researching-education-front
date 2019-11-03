import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const handleSubmit = e => {};
const handleChange = e => {};

const SubscribePage = props => (
  <Layout>
    <SEO
      title="Subscribe to get the latest issue of Researching Education"
      keywords={[`research`, `teaching`, `learning`, 'teach', 'learn']}
    />
    <h1 dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.title }} />
    <div
      dangerouslySetInnerHTML={{ __html: props.data.wordpressPage.content }}
    />
    <form
      name="subscribe"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input type="text" name="name" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input type="email" name="email" onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Subscribe</button>
      </p>
    </form>
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
