import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Img from "gatsby-image"

const imgQuery = useStaticQuery(graphql`
query{
  file(relativePath: { eq: "hero-img.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)
const Hero = () => {
  const data = useStaticQuery(imgQuery)
  console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <Img fluid={imgQuery.file.childImageSharp.fluid} />

        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Biel</h1>
            <h4>Junior Web Developer</h4>
            <Link to="/contact" className="btn">Contact me</Link>
            <SocialLinks />
          </div>
        </article>

      </div>
    </header>
  )
}

export default Hero