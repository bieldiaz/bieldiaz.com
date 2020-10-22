import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Image from "gatsby-image"

//<Img fluid={imgQuery.file.childImageSharp.fluid} />

const query = graphql`
{
  file(relativePath: {eq: "porfolio-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Biel</h1>
            <h4>Junior Web Developer</h4>
            <Link to="/contact" className="btn">Contact me</Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />

      </div>
    </header>
  )
}

export default Hero