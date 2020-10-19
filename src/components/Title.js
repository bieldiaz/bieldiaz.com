import React from "react"
import services from "../constants/services"

//<Img fluid={imgQuery.file.childImageSharp.fluid} />

const Title = ({ title }) => {

    return (
        <div className="section-title">
            <h2>{title || 'sin titulo asignado'}</h2>
            <div className="underline"></div>
        </div>
    )
}

export default Title