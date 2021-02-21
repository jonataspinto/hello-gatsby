import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    {/* <SEO title="Home" /> */}
    <h1>{post.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: post.html}}></div>
  </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default BlogPost
