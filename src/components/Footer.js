import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <SocialLinks styleClass="footer-links"> </SocialLinks>
                <h4>
                    copyright&copy;{new Date().getFullYear()}
                    <a href="https://www.linkedin.com/in/biel-d%C3%ADaz-gadea/"> Biel Díaz </a>all rights reserved
                </h4>

            </div>
        </footer>
    )
}

export default Footer