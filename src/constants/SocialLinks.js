import React from "react"
import {
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare,
    FaGooglePlusSquare,
    FaTwitterSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
        url: "https://www.instagram.com/bieldg99/",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/biel-d%C3%ADaz-gadea/",
    },
    {
        id: 3,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://github.com/bieldiaz/",
    },
    {
        id: 4,
        icon: <FaGooglePlusSquare className="social-icon"></FaGooglePlusSquare>,
        url: "mailto:bieldg99@gmail.com",
    },
    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://twitter.com/bieldiaz6",
    },
]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a target='_blank' href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}