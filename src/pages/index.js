import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import { useStaticQuery, graphql } from 'gatsby'
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }`)
  

  return (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </Layout>
)}

export default IndexPage
