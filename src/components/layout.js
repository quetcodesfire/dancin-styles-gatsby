import React from 'react'

import NavigationBar from './NavigationBar'
import Footer from './Footer'

import '../assets/styles/application.scss'

const Layout = ({children, navigation = true, footer = true}) => (
  <div>
    {navigation && <NavigationBar />}
      <main className="dancin-styles-fitness" >
        {children}
      </main>
    {footer && <Footer />}
  </div>
)

export default Layout