import React from 'react'

import ContentContainer from './ContentContainer'
import Navigation from './Navigation'
import Footer from './Footer'

import Background from '../images/purple-tri.jpg'

const Layout = ({children, navigation = true, footer = true}) => (
  <div style={{background: `url(${Background}) no-repeat center center fixed`}}>
    {navigation && <Navigation />}
    <ContentContainer>
      <main className="dancin-styles-fitness" style={{marginLeft: `10vw`}}>
        {children}
      </main>
    </ContentContainer>
    {footer && <Footer />}
  </div>
)

export default Layout