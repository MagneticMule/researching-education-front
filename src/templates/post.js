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

    // featured image: the image that appears at the beggining of the article
    const featuredImage =
      post.acf.post_cover_image_file.localFile.childImageSharp.fluid;

    // string: The full reference to the original article in APA format
    const articleReference = post.acf.reference;
    // string - URL: the url to the original academic paper (if any)
    const articleReferenceLink = post.acf.link_to_article;
    //fixed sized portrait image of author
    const authorImage =
      post.acf.author_portrait.localFile.childImageSharp.fixed;
    //author name
    const authorName = post.acf.author_name;
    // author biography
    const authorBio = post.acf.author_biography;
    // author institution
    const authorInstitution = post.acf.author_institution_or_business;

    // disqus comment system setup
    const disqusShortname = 'researching-education';
    const disqusConfig = {
      identifier: post.title,
      title: post.title,
    };
    return (
      <Layout>
        <div className="post">
          <div className="post__header">
            <div
              className="post__header-date"
              dangerouslySetInnerHTML={{ __html: post.date }}
            />
            <h1
              className="post__header-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </div>

            <Img fluid={featuredImage} objectPosition="50% 50%" fadeIn="1" className="post__featured-image"/>

          {/*
          <div class="issue">
            <div className="issue__title">
              Issue <span class="issue__number">01</span>
            </div>
            <div className="hline" />
            <div className="issue__date">February 2019</div>
          </div>
          -*/}

          <Share />

          <div class="post__author">
            <Img
              fixed={authorImage}
              objectFit="cover"
              className="post__author-picture"
            />
            <br />
            <span class="post__author--italic-underline">by</span>&nbsp;
            <span
              className="post__author-name"
              dangerouslySetInnerHTML={{ __html: authorName }}
            />
            <div
              className="post__author-bio"
              dangerouslySetInnerHTML={{ __html: authorBio }}
            />
            <div className="post__author-contact">
              <div
                className="post__author-contact--institution "
                dangerouslySetInnerHTML={{
                  __html: authorInstitution,
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
        post_cover_image_file {
          localFile {
            childImageSharp {
              fluid(maxHeight: 660) {
                src
                srcSet
              }
            }
          }
        }
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
