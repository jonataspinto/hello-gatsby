import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import { useStaticQuery, graphql } from 'gatsby'
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              category
              background
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const PostList = allMarkdownRemark.edges;  

  return (
  <Layout>
    <SEO title="Home" />
    {PostList.map(
      ({
        node: { 
          frontmatter: {
            title,
            description,
            category,
            background,
            date
          },
          timeToRead,
          fields: {
            slug
          }
        },
      }, i) => (
      <PostItem
        slug={slug}
        title={title}
        description={description}
        category={category}
        background={background}
        date={date}
        timeToRead={timeToRead}
      />
    ))}
  </Layout>
)}

export default IndexPage
