import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

const ProjectsPage = ({
    data: { allStrapiProjects: { nodes: projects },
    },
}) => {
    return (
        <Layout>
            <section className="project-page">
                <Projects projects={projects} title="all projects" />
            </section>
        </Layout>
    )
}
export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage