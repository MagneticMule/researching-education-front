import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Disqus from 'disqus-react'
import Layout from '../components/layout'
// import PostIcons from "../components/PostIcons"

// import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const disqusShortname = 'researching-education'
    const disqusConfig = {
      identifier: post.title,
      title: post.title,
    }
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
            <div class="post__header-author">
              <span class="post__content--italic">by</span>&nbsp;
              <span
                class="post__header-author-name"
                dangerouslySetInnerHTML={{ __html: post.author.name }}
              />
              <div
                class="post__header-author-bio"
                dangerouslySetInnerHTML={{ __html: post.author.description }}
              />
              {/* <img
                class="post__header-author-picture"
                src={post.author.avatar_urls.wordpress_48}
              /> */}
            </div>
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
    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

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
`
