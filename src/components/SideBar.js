import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Links from "../constants/Links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const SideBar = ({ isOpen, toggleSideBar }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
            <button className="close-btn" onClick={toggleSideBar}>
                <FaTimes />
            </button>
            <div className="side-container">
                <Links styleClass="sidebar-links" />
                <SocialLinks styleClass="sidebar-icons" />
            </div>
        </aside>
    )
}

export default SideBar