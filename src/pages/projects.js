import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects },
  },
}) => {
  useEffect(() => {
    document.title = "ALL PROJECTS";
  }, []);
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