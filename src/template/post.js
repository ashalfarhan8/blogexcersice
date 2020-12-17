import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <img src="../assets/images/post1.jpg" alt="post images" />
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template
