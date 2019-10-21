import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExp from "../components/workexp"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="heading">About Me :</h1>
    <p className="para">
      My name is Syed Zoheb Ali Sumair, I live in Hyderabad,India.I like doing
      things on web, Mostly Frontend stuff. I have been working on developing
      web apps that are aesthetic, performant and accessible for quite a long
      time now.I have done Bachelor of technology in Computer Science and
      information Technology in 2011. I like travelling and have travelled to
      countries like Malaysia, Thailand and Saudi Arabia (Where i actually
      worked for almost 3 years). If i am not working or learning stuff, i am
      mostly usually hanging out with my friends or go out with my family. Else,
      i like watching documentaries about history, wild life (mostly this
      because i love animals) or about space/universe.
    </p>
    <div className="work-experience">
      <h1 className="heading">Work Experience :</h1>
      <WorkExp
        companyName={"MyAlly"}
        position={"Senior FrontEnd Developer"}
        tenure={"July 2018 - May 2019"}
      />
      <WorkExp
        companyName={"Flyship"}
        position={"Senior Fullstack Developer"}
        tenure={"July 2018 - May 2019"}
      />
      <WorkExp
        companyName={"Echoserve Tech"}
        position={"FrontEnd Developer"}
        tenure={"July 2018 - May 2019"}
      />
    </div>
  </Layout>
)

export default About
