import React from "react"
import NavBar from "./NavBar"
import Footer from "../components/Footer"
import SideBar from "./SideBar"

const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <NavBar toggleSideBar={toggleSideBar} />
            <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
            {children}
            <Footer />
        </>
    )
}

export default About