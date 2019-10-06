import React from "react"
// import { Link } from "gatsby"

import Bio from '../components/Bio'
// import EmailSignup from '../components/EmailSignUp'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Registration from '../components/Registration'
import NavigationDrawer from '../components/NavigationDrawer'
import Youtube from '../components/Youtube'

// import SEO from "../components/seo"

import DancinStylesLogo from '../assets/images/dancin-styles-logo.jpg'

const IndexPage = () => ( 
  <Layout>
    <NavigationDrawer />
    <img src={DancinStylesLogo} alt="Dancin Styles Logo" className="dancin-styles-logo" />
    <Bio />
    <Info />
    <Registration />
    {/* <EmailSignup />  */}
    <Youtube />
  </Layout>
)

export default IndexPage
