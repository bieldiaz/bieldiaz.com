import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, title, github, stack, url, image, index }) => {
    return (
        <article className="project">
            <Image fluid={image.childImageSharp.fluid} className="project-img" />
            <div className="project-info">
                <span className="project-numer">0{index + 1}</span>
                <h3>{title}</h3>
                <p className="project-desc">
                    {description}
                </p>
                <div className="project-stack">
                    {stack.map((item) => {
                        return <span key={item.id}>{item.title}</span>
                    })}
                </div>
                <div className="projects-links">
                    <a href="{github}" target="_blank"><FaGithubSquare className="project-icon" /></a>
                    <a href="{url}" target="_blank"><FaShareSquare className="project-icon" /></a>
                </div>
            </div>
        </article>
    )
}

export default Project