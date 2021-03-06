import React, { useEffect } from "react"
import Layout from "../components/Layout"
import "../css/main.css"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects },
  } = data

  useEffect(() => {
    document.title = "BIEL DEVELOPER";
  }, []);

  return (

    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`