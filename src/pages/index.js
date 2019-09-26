import React from "react"
// import { Link } from "gatsby"

import Bio from '../components/Bio'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Registration from '../components/Registration'

// import SEO from "../components/seo"

import DancinStylesLogo from '../images/dancin-styles-logo.jpg'

const IndexPage = () => ( 
  <Layout>
    <img src={DancinStylesLogo} alt="Dancin Styles Logo" style={{height: `100vh`, width: `100%`}}/>
    <Bio />
    <Info />
    <Registration />
  </Layout>
)

export default IndexPage
