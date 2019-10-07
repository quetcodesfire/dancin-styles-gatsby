import React from 'react'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool,
  navigation: PropTypes.bool
}

export default Layout