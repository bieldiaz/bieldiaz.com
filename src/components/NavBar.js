import React from "react"
import PageLinks from "../constants/Links"
import { FaAlignRight } from "react-icons/fa"
import logo from "../assets/logo.png"
const NavBar = ({ toggleSideBar }) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" />
                    <button type="button" className="toggle-btn" onClick={toggleSideBar}>
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}

export default NavBar