import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query JumbotronImage {
      image: file(relativePath: { eq: "jumbotron.jpg" }) {
        id
        childImageSharp {
          fixed(width: 600, height: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="Jumbotron">
      <Img fixed={data.image.childImageSharp.fixed} alt="Company Name" />
    </div>
  )
}

export default Jumbotron
