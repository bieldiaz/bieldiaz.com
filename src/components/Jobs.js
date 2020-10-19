import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
    const data = useStaticQuery(query)
    const {
        allStrapiJobs: { nodes: jobs },
    } = data
    const [value, setValue] = React.useState(0)
    const { company, position, date, desc } = jobs[value]
    console.log(company, position, date, desc)

    return (
        <section className="section jobs">
            <Title title="Experience" />
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                className={`job-btn ${index === value && 'active-btn'}`}
                                key={item.strapiId}
                                onClick={() => setValue(index)}> {item.company}
                            </button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{date}</p>
                    {
                        desc.map((item) => {
                            return (
                                <div key={item.id} className="job-desc">
                                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
            <Link to="/about" className="btn center-btn" >
                more info
            </Link>
        </section >
    )
}

export default Jobs