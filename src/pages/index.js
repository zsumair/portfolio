import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Syed Zoheb Ali Sumair" />
    <h1 className="heading">
      Hey
      <span
        role="img"
        aria-label="hand wave emoji"
        style={{ paddingLeft: `5px`, paddingRight: `5px` }}
      >
        👋
      </span>
      There,
    </h1>
    <p className="para landing-text">
      I am a Front End Developer with more than 6 years of experience who
      focuses on writing clean, elegant and efficient code
      <span role="img" aria-label="rocket emoji" style={{ paddingLeft: `5px` }}>
        🚀
      </span>
      . I work mostly in Reactjs. However i am comfortable with
      Nodejs(ExpressJs) and also other front-end frameworks such as VueJS. I
      Like doing things one day at a time
      <span
        role="img"
        aria-label="climbing emoji"
        style={{ paddingLeft: `5px` }}
      >
        🧗🏻‍♂️
      </span>
      .
    </p>
    <div className="section">
      <h2 className="heading skills"> My Skills</h2>
      <ul className="skill-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Git</li>
        <li>Reactjs</li>
        <li>NodeJs</li>
        <li>Expressjs</li>
        <li>Webpack</li>
        <li>D3js</li>
        <li>Gatsby</li>
        <li>NextJs</li>
        <li>Sass</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
