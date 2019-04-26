import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Disqus from 'disqus-react';
import Layout from '../components/layout';
import Share from '../components/share';
// import PostIcons from "../components/PostIcons"

// import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    // boolean: Is this article republished from an external source such as "The Conversation"?
    const isExternalArticle = post.acf.external_article;
    // string: The full reference to the original article in APA format
    const articleReference = post.acf.reference;
    // string - URL: the url to the original academic paper (if any)
    const articleReferenceLink = post.acf.link_to_article;

    // disqus comment system setup
    const disqusShortname = 'researching-education';
    const disqusConfig = {
      identifier: post.title,
      title: post.title,
    };
    return (
      <Layout>
        <div class="post">
          <div class="post__header">
            <div
              class="post__header-date"
              dangerouslySetInnerHTML={{ __html: post.date }}
            />
            <h1
              class="post__header-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </div>
          {/*
          <div class="issue">
            <div class="issue__title">
              Issue <span class="issue__number">01</span>
            </div>
            <div class="hline" />
            <div class="issue__date">February 2019</div>
          </div>
          -*/}

          <Share />

          <div class="post__author">
            <Img
              fixed={post.acf.author_portrait.localFile.childImageSharp.fixed}
              objectFit="cover"
              className="post__author-picture"
            />
            <br />
            <span class="post__author--italic-underline">by</span>&nbsp;
            <span
              class="post__author-name"
              dangerouslySetInnerHTML={{ __html: post.acf.author_name }}
            />
            <div
              class="post__author-bio"
              dangerouslySetInnerHTML={{ __html: post.acf.author_biography }}
            />
            <div class="post__author-contact">
              <div
                class="post__author-contact--institution "
                dangerouslySetInnerHTML={{
                  __html: post.acf.author_institution_or_business,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.acf.author_email_address,
                }}
              />

              <div
                dangerouslySetInnerHTML={{
                  __html: post.acf.author_website,
                }}
              />
            </div>
          </div>
          <div
            class="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div class="post__comments">
          <p>
            If you have a comment on this article, please subscribe to{' '}
            <strong>Disqus</strong> where your comments can be relayed here. The
            Editors reserve the right to moderate submitted comments.
          </p>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </Layout>
    );
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default PostTemplate;

export const postQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      acf {
        author_name
        author_email_address
        author_institution_or_business
        author_website
        author_twitter_username
        author_biography
        author_portrait {
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                base64
                width
                height
                src
                srcSet
              }
              id
            }
          }
          alt_text
          caption
        }
      }
      content
      date(formatString: "DD, MMM, YYYY")
    }
  }
`;
