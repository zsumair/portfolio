import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const WorkExp = ({ companyName, position, tenure }) => (
  <div className="job-card">
    <h2 className="heading">{position}</h2>
    <p className="para">{companyName}</p>
    <span>{tenure}</span>
  </div>
)

export default WorkExp
