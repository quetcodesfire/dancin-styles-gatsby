import React from 'react'

import ContentContainer from './ContentContainer'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

import Background from '../images/purple-tri.jpg'

const Layout = ({children, navigation = true, footer = true}) => (
  // <div style={{background: `url(${Background}) no-repeat center center`, backgroundSize: `fixed`}}>
  <div>
    {navigation && <NavigationBar />}
    {/* <ContentContainer> */}
      <main className="dancin-styles-fitness" >
        {children}
      </main>
    {/* </ContentContainer> */}
    {footer && <Footer />}
  </div>
)

export default Layout