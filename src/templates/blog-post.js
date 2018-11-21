import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Head from '../components/Head'
import Header from '../components/Header'
import { Wrapper, Container } from '../components/Spacing/styles'
// import PrevNext from '../components/PrevNext'

const BodyText = styled.div`
  max-width: 40em;

  p {
    margin-bottom: 2em;
  }
`

const PostTitle = styled.h1`
  font-weight: normal;
  margin-top: 0;
  font-size: 40px;
  margin-bottom: 2em;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <Head title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header />
        <Wrapper>
          <Container>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* <PrevNext previous={previous} next={next} /> */}
          </Container>
        </Wrapper>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
