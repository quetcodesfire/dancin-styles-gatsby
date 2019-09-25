import React from "react"
import { Link } from "gatsby"

// import Navigation from '../components/Navigation'
import Bio from '../components/Bio'
import Info from '../components/Info'
// import Footer from '../components/Footer'
import Layout from '../components/Layout'

// import SEO from "../components/seo"

import DancinStylesLogo from '../images/dancin-styles-logo.jpg'

const IndexPage = () => ( 
  <Layout>
    <img src={DancinStylesLogo} alt="Dancin Styles Logo" style={{height: `100vh`, width: `100%`}}/>
    <Bio />
    <Info />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>

)

export default IndexPage
