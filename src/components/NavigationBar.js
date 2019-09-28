import React from 'react'
import {Link} from 'gatsby'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

const NavigationBar = () => {
  function toggleNavDropdown () {
    const links = document.getElementsByClassName('menu-bar-links-container')[0]
    if (links.style.display === 'block') {
      links.style.display = "none"
    } else {
      links.style.display = "block"
    }
  }

  return (
    <AppBar position="sticky" style={{background: `darkOrchid`}}>
      <Toolbar>
        <IconButton onClick={toggleNavDropdown}>
          <Menu />
        </IconButton>
        <Typography variant="h5" className='dancin-styles-nav-logo'>
          Dancin Styles Fitness
        </Typography>
      </Toolbar>
      <div className="menu-bar-links-container" onClick={toggleNavDropdown}>
        <Link className="menu-bar-link"to="#">HOME</Link>
        <Link className="menu-bar-link"to="#about">ABOUT</Link>
        <Link className="menu-bar-link"to="#classes">CLASSES</Link>
        <a className="menu-bar-link" href="http://www.ladystyleshairdesign.com" target="_blank" rel="noopener noreferrer">LADY STYLES HAIR</a>
      </div>
    </AppBar>
  )
}

export default NavigationBar