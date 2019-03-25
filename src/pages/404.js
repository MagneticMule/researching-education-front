import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>OOOPS!</h1>
    <p>
      Whatever you were looking for isn&#39;t here. Perhaps you could head back{' '}
      <a href="/">home and look there.</a>
    </p>
  </Layout>
);

export default NotFoundPage;
