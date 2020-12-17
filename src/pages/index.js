import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <h2>Visit my blog post!</h2>
    {data.allMarkdownRemark.edges.map(post => {
      return (
        <div>
          <Link to={post.node.frontmatter.path} key={post.node.id}>
            {post.node.frontmatter.title}
          </Link>
        </div>
      )
    })}
    <p>You can change the title of the page to SEO Component</p>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
