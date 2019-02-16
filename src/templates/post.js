import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import Layout from '../components/layout';
import Share from '../components/share';
// import PostIcons from "../components/PostIcons"

// import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
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
          <div class="issue">
            <div class="issue__title">
              Issue <span class="issue__number">01</span>
            </div>
            <div class="hline" />
            <div class="issue__date">February 2019</div>
          </div>

          <Share />

          <div class="post__author">
            <div>
              <img
                class="post__author-picture"
                src={post.author.avatar_urls.wordpress_48}
              />
            </div>
            <span class="post__content--italic">by</span>&nbsp;
            <span
              class="post__author-name"
              dangerouslySetInnerHTML={{ __html: post.author.name }}
            />
            <div
              class="post__author-bio"
              dangerouslySetInnerHTML={{ __html: post.author.description }}
            />
          </div>
          <div
            class="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div class="post__comments">
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
      author {
        name
        description
        avatar_urls {
          wordpress_48
        }
      }
      content
      date(formatString: "DD, MMM, YYYY")
    }
  }
`;
