import React from "react"
import PageLinks from "../constants/Links"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//...GatstbyImageSharpFluid here

const query = graphql`
{
  file(relativePath: {eq: "hero-img.jpg"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`
const Hero = () => {
    const data = useStaticQuery(query)
    console.log(data)

    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">

                </article>
            </div>
        </header>
    )
}

export default Hero