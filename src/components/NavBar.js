import React from "react"
import PageLinks from "../constants/Links"
import { FaAlignRight } from "react-icons/fa"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src="" alt="logo" />
                    <button type="button" className="toggle-btn">
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}

export default NavBar